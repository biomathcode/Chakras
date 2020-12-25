import React from 'react';
import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown';
const ContentMarkdown = () => {
    const data = `
    # Introduction
    
    **The root chakra, or Muladhara, is located at the base of your spine. It provides you with a base or foundation for life, and it helps you feel grounded and able to withstand challenges. Your root chakra is responsible for your sense of security and stability.**
    
    - **Position**: In the perineum between the anus and the genitals, at the base of the spine, coccyx
    - **Function**: Survival, Stability, security, self-confidence
    - **Color**: red
    - **Element**: earth
    - **Sense**: smell
    - [Stones](https://reikishamanichealing.com/crystal-healing/): red jasper, ruby, red coral, garnet, black onyx, oxidania
    - **Mantra**: Lam, S
    - **Lotus**: 4 petals with earth inside
    - **Note**: do
    - **Animal**: ox, bull, elephant (associated with the earth)
    
    ### Description
    
    The word *Muladhara* comes from Sanskrit and literally means "base support".
    
    This chakra is located at the base of the spine, in the perineum. It is the chakra that is connected to the legs and is therefore a **symbol of the earth** and everything that is solid and stable. For this reason it is also the chakra of all the hardest parts of the body, such as nails, bones and teeth.
    
    It controls different parts of the body such as the nose, sense of smell, lymphatic system, bone system, prostate and lower extremities. It is usually associated with the color red. **The root chakra or first chakra** symbolizes stability, self-confidence and security and is related to our survival. When it is balanced we feel safe, happy and able to live the present moment, full of enthusiasm and ready to plan our future.
    
    It is in fact essential to have solid roots on which to base our whole life, just as the roots for the survival of a tree or the foundations for building a solid house are fundamental.
    
    When **the first chakra is blocked**, we can feel lost, apathetic, distrustful and without self-confidence. We will never feel satisfied in one place and we will tend to change house or country often.
    
    Even our body suffers from the blockage of this chakra: we will feel tired and exhausted, we will have problems with our teeth, kidneys and joints.
    
    When **it is too open**, opposite feelings are unleashed, such as a strong attachment to material goods and the past, without being able to live the present moment.
    
    We oppose to change and we develop a total lack of fear or excessive fear, which can lead us to get into very risky situations or the inability to enjoy the beauty of life.
    
    To **balance the chakras** you never have to pretend to be what you are not. For example, you don't have to fake pretending to be happy to align it, but on the contrary, if you manage to rebalance it, you will start to feel happy.
    
    If you can't [do a Reiki session](https://reikishamanichealing.com/how-is-a-reiki-session/), there are several exercises, positions and visualizations you can do to **unlock the first chakra.**
    
    The first thing I recommend you do is to find a quiet place where you can be in direct contact with the earth, such as a wood or a garden. The garden at home is also fine!
    
    Practice yoga positions that encourage your contact with the earth, such as *[Vrksasana](https://en.wikipedia.org/wiki/Vrksasana)*, the tree position, or *[Tadasana](https://en.wikipedia.org/wiki/Baddha_Ko%E1%B9%87%C4%81sana)*, the mountain position.
    
    Also do **visualization exercises**. Sit on the ground with your legs crossed and your back upright. Now visualize roots that start from your body and go deep into the ground.
    
    As the roots go down, they will carry with them all the negative energies you have accumulated. When you feel ready, call back the roots to yourself, which will go back together with the positive energy of the earth.
    
    To help you keep your concentration, you can also listen to the **LAM mantra**, the mantra corresponding to the first chakra, which you can find in the video below.
    
    You can also open this chakra by walking (e.g. experiencing walking meditation), doing aerobic exercises, flexing your trunk until you touch your toes while sitting, doing dance or dance exercises, jumping on the spot, doing exercises that enhance self-confidence, practicing yoga, etc..
    `
    return (
        <ReactMarkdown children={data}/>
    )
}

export default ContentMarkdown;