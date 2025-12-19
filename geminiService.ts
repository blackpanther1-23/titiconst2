import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Ești asistentul virtual al companiei TITICONST, o firmă de construcții din Bacău, România.
Compania a fost înființată în 1998.
Servicii principale:
1. Construcții Civile și Industriale (case la roșu, hale metalice).
2. Reabilitări și Renovări (consolidări, modernizări).
3. Lucrări de Beton și Fundații (platforme industriale, fundații speciale).
4. Amenajări Exterioare (garduri, pavaje, sistematizări verticale).
5. Consultanță și Ofertare.

Locație: Strada Militari nr. 35A, Birou 1–2, Etaj P, Bacău.
Telefon: 0740 807 947.
Email: titiconst@yahoo.com.

Tonul tău trebuie să fie profesionist, serios, dar primitor. Răspunde în limba română.
Dacă utilizatorul întreabă de prețuri, explică faptul că ofertele sunt personalizate în funcție de proiect și recomandă-le să folosească butonul "Cere Ofertă" sau să sune la numărul de telefon.
Fii concis.
`;

export async function getGeminiResponse(userPrompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    // Initialize GoogleGenAI using named parameter and direct process.env.API_KEY access as required by guidelines.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Call generateContent with both model name and prompt/contents in a single call.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        // Removed maxOutputTokens to prevent the response from being blocked due to thinking token consumption on Gemini 3 models.
      },
    });

    // Directly access the .text property from the GenerateContentResponse object.
    return response.text || "Ne pare rău, a intervenit o eroare. Vă rugăm să ne contactați direct la telefon.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Momentan asistentul AI nu este disponibil. Vă rugăm să ne contactați telefonic la 0740 807 947.";
  }
}
