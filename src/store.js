import axios from "axios";
import DataStore from "./DataStore";


const apiKey = process.env.OPEN_AI_KEY;

export async function getPromptResponse(userInput) {
    const prompt = ` ${userInput} in Hebbrew and return it in JSON format like this:    
    {
        "1":"...",
        "2":"...",
        "3":"...",
    }`;

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: "gpt-3.5-turbo-instruct",
            prompt: prompt,
            max_tokens: 1000,
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        const parsableJSONResponse = response.data.choices[0].text.trim();

        let parsedResponse;
        try {
            parsedResponse = JSON.parse(parsableJSONResponse);
            console.log("idea 1", parsedResponse["1"]);
            console.log("idea 2", parsedResponse["2"]);
            console.log("idea 3", parsedResponse["3"]);
            DataStore.response=parsedResponse;

        } catch (error) {
            console.error('Error parsing JSON response', error);
            return { error: "Error parsing JSON response", rawResponse: parsableJSONResponse };
        }

        return parsedResponse;

    } catch (error) {
         console.error('Error in OpenAI API call', error);
        return { error: "Error in OpenAI API call" };
    }
}
