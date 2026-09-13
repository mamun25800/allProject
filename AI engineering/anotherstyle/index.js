// এখানে নিজের key বসাও

document.getElementById("sendBtn").addEventListener("click", async () => {
  const userText = document.getElementById("userInput").value;
  const outputDiv = document.getElementById("output");

  outputDiv.textContent = "লোড হচ্ছে...";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openrouter/free", // অথবা তোমার পছন্দের যেকোনো OpenRouter মডেল
        messages: [
            {role:'system',content:`You are a friendly and cheerful assistant.
                                        if the user will give you a person's name.
                                        Write a short, warm, positive and heart-touching message for that person.
                                        Start by addressing the person by their name.
                                        Make the person feel welcomed, special and happy.
                                        Use simple English and a few suitable emojis.
                                        Do not explain anything; only return the message.`},
          { role: "user", content: userText }
        ],
        temperature:1
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    outputDiv.textContent = reply;

  } catch (error) {
    outputDiv.textContent = "সমস্যা হয়েছে: " + error.message;
  }
});