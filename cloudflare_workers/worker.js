export default {
  async fetch(request, env) {
    if (request.method === "POST") {
      const PIPE_ID = 304186363; // Your Pipefy Pipe ID
      const API_TOKEN = env.PIPEFY_API_TOKEN; // Securely stored in Cloudflare Worker environment variables

      try {
        const formData = await request.formData();

        // Mapping form fields to Pipefy's expected format
        const inputFields = [
          { field_id: "nome_do_contato", field_value: formData.get("nome_do_contato") },
          { field_id: "email", field_value: formData.get("email") },
          { field_id: "empresa", field_value: formData.get("empresa") },
          { field_id: "telefone", field_value: formData.get("telefone") },
          { field_id: "observa_es", field_value: formData.get("observa_es") },
          { field_id: "url", field_value: formData.get("url") }, // New field for URL
          { field_id: "referral", field_value: formData.get("referral") } // New field for referral
        ];

        // GraphQL Mutation using variables
        const graphqlQuery = {
          query: `
            mutation CreateCard($pipe_id: ID!, $fields_attributes: [FieldValueInput]!) {
              createCard(input: { pipe_id: $pipe_id, fields_attributes: $fields_attributes }) {
                card {
                  id
                  title
                }
              }
            }
          `,
          variables: {
            pipe_id: PIPE_ID,
            fields_attributes: inputFields
          }
        };

        // Sending request to Pipefy API
        const response = await fetch("https://api.pipefy.com/graphql", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(graphqlQuery)
        });

        // Pipefy's API response
        const responseData = await response.json();

        // Return Pipefy's response as-is
        return new Response(JSON.stringify(responseData), {
          status: response.status,
          headers: { "Content-Type": "application/json" }
        });

      } catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    return new Response("Method Not Allowed", { status: 405 });
  }
};

