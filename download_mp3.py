from elevenlabs import play
from elevenlabs.client import ElevenLabs, Voice, VoiceSettings
from elevenlabs import save


import os
ELEVEN_API_KEY = os.getenv('ELEVEN_API_KEY')
VOICE_ID = "YUdpWWny7k5yb4QCeweX"


client = ElevenLabs(
  api_key=ELEVEN_API_KEY

)
#
# string_list = ["Goed gedaan!",
#                "Fantastisch!",
#                "Geweldig!",
#                "Prima!",
#                "Heel goed!",
#                "Uistekend",
#                "Knap hoor!",
#                "Fantastisch gedaan!",
#                "Wat goed zeg!",
#                "Klasse!",
#                "Goed bezig!",
#                "Wat knap van je!",
#                ]

string_list = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                              "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

for string in string_list:
    audio = client.generate(
        text=f"Schrijf de: {string}",
        voice=VOICE_ID,
        model="eleven_multilingual_v2",
            # settings=VoiceSettings(stability=0.71, similarity_boost=0.5, style=0.0, use_speaker_boost=True)
        output_format="mp3_22050_32"
    )

    save(audio, f"output/Schrijf de {string}.mp3")
