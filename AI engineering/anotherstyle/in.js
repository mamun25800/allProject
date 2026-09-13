 // (আগেরটা revoke করে নতুন বানিয়ে নাও)

document.getElementById("sendBtn").addEventListener("click", async () => {
  const userText = document.getElementById("userInput").value;
  const outputDiv = document.getElementById("output");

  outputDiv.textContent = "ছবি তৈরি হচ্ছে...";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [
          { role: "user", content: userText }
        ],
        modalities: ["image", "text"]   // এটা লাগবেই image পাওয়ার জন্য
      })
    });

    const data = await response.json();
    console.log(data); // পুরোটা দেখে নাও প্রথমে

    // image সাধারণত এভাবে আসে, model অনুযায়ী গঠন একটু ভিন্ন হতে পারে
    const imageUrl = data.choices[0].message.images?.[0]?.image_url?.url;

    if (imageUrl) {
      outputDiv.innerHTML = `<img src="${imageUrl}" style="max-width:100%;">`;
    } else {
      outputDiv.textContent = "ছবি পাওয়া যায়নি, console চেক করো।";
    }

  } catch (error) {
    outputDiv.textContent = "সমস্যা হয়েছে: " + error.message;
  }
});