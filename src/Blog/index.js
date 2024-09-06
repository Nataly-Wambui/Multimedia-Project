import React from 'react';
import { useState } from 'react';
import './index.css';


const Blog = () => {
    const pdfUrl1= 'https://drive.google.com/file/d/1EK-fzGdOSIfxuOoCMwLyPKvWIUyBOL6L/view?usp=sharing'
    const [showModal, setShowModal] = useState(false);
    const [showModals, setShowModals] = useState(false);
    return (
        <div className='blog'>

            <h1>Available Blogs</h1>
            <div className='container'>


                <div className='description'>
                    <p className='date'>10.07.24</p>
                    <h3>BORN A CRIME</h3>
                    <p className='story'>Stories from a South African Childhood is an autobiographical comedy book written by South African comedian Trevor Noah, published in 2016</p>

                 
                    <button className='read-more' onClick={()=> setShowModal(true)}>Read More</button>
                

                </div>
                <div>
                    <img className='image' src="Images/bornacrime.jpeg" alt='born a crime picture'/>
                </div>
            </div >

            <div className='container'>
                <div>
                    <img className='images' src="Images/Humour.png" alt='trevor'/>
                </div>

                <div className='description'>
                    <p className='date'>7.08.24</p>
                    <h3>USE OF HUMOR</h3>
                    <p className='story'>Stories from a South African Childhood is an autobiographical comedy book written by South African comedian Trevor Noah, published in 2016</p>

                 
                    <button className='read-more' onClick={()=> setShowModals(true)}>Read More</button>
                

                </div>
            </div >

        <div className='contain' style={{display:showModal ? "block" : "none"}}>
                <div className='contain-modal'>
                <h1 className='title'>"Born a Crime": A Reflection on Social, Political, and Economic Relevance</h1>  
          <h3>Introduction</h3>
          <p>"Born a Crime," written by Trevor Noah, offers an intimate glimpse into the life of one of South Africa's most beloved comedians. The memoir delves deep into his experiences growing up during apartheid and post-apartheid South Africa, highlighting the resilience of the human spirit amidst adversity. This article explores the book's relevance to contemporary social, political, and economic issues.
</p>
<h3>The Power of Personal Stories</h3>
<p>Trevor Noah's narrative serves as a powerful reminder that personal stories can shed light on broader societal issues. His experiences as a mixed-race child in South Africa under apartheid laws illuminate the complexities of racial identity, discrimination, and the struggle for equality. In today's world, where discussions around race, identity, and systemic inequality are at the forefront, "Born a Crime" provides a historical perspective that resonates deeply.
</p>

<h3>Racial Identity and Discrimination
</h3>
<p>Noah's exploration of his racial identity challenges the simplistic binaries often presented in discussions about race. He navigates the complexities of being classified as "coloured" under apartheid, a status that was neither black nor white, yet subjected to both forms of discrimination. This nuanced understanding of racial identity is particularly relevant in today's global conversations about race and identity, emphasizing the need for more complex and nuanced discussions.</p>

<h3>Political Commentary
</h3>
<p>The book also serves as a political commentary, offering insights into the transition from apartheid to democracy in South Africa. Noah's observations on the country's political landscape, including the rise of the African National Congress (ANC) and the challenges faced by the new government, provide a critical lens through which to view South Africa's journey towards reconciliation and transformation. These reflections are timely, considering ongoing debates about governance, corruption, and the legacy of apartheid in shaping contemporary South African politics.
</p>

<h3>Economic Implications</h3>
<p>Economically, "Born a Crime" touches upon the impact of apartheid policies on the socio-economic fabric of South Africa. The legacy of segregation and economic disparity continues to influence the lives of many South Africans today. Noah's account of his family's struggles and resilience in the face of poverty underscores the enduring effects of economic inequality. This aspect of the book resonates with global discussions on wealth distribution, poverty alleviation, and the role of education in breaking cycles of poverty.
</p>

<h3>Conclusion
</h3>

<p>"Born a Crime" is not just a memoir; it's a mirror reflecting the complexities of social, political, and economic issues that continue to shape our world. Trevor Noah's story is a testament to the power of individual narratives in challenging stereotypes, promoting empathy, and driving change. As we navigate the challenges of our time, looking back at histories like those shared in "Born a Crime" can offer valuable lessons and inspire us to imagine a future where justice, equality, and opportunity are within reach for all.</p>


<div>
    <a href={pdfUrl1} target='"_blank' rel='noopener nonreferrer' className='research'>Find our Research article here</a>
</div>

<button className='read-more' onClick={()=> setShowModal(false)}>Read Less</button>
                </div>


        </div>

        <div className='contain' style={{display:showModals ? "block" : "none"}}>
                <div className='contain-modal'>
                <h1 className='title'>"Born a Crime": Use of Humor</h1>  
          <h3>Introduction</h3>
          <p>Trevor Noah's autobiography, Born a Crime, is a masterclass in using humor to navigate the complexities of his life as a mixed-race child in apartheid South Africa. Throughout the book, Noah employs humor not just as a storytelling device, but as a means of coping with adversity, making friends, and diffusing tense situations. This article will evaluate how Noah's comedic approach shapes his narrative and supports his interactions with others.

</p>
<h3>Humor as a Coping Mechanism
</h3>
<p>Noah's life experiences are often marked by hardship, yet he consistently uses humor to frame these challenges in a more palatable light. For instance, when recounting the moment his mother threw him from a moving car to escape danger, he reflects on the absurdity of the situation rather than the fear it instilled in him. He recalls asking, “What do you mean? Why are we running?” and his mother’s response, “Those men were trying to kill us.” This exchange, filled with humor, highlights Noah's youthful innocence and his mother's quick thinking, allowing readers to laugh while acknowledging the gravity of the situation.
Noah's humorous storytelling serves to soften the harsh realities of his upbringing. He often employs self-deprecating humor, which not only endears him to readers but also allows him to confront difficult truths about race and identity. By making light of his circumstances, he transforms moments of vulnerability into relatable anecdotes, showcasing his resilience.

</p>

<h3>Building Relationships Through Humor

</h3>
<p>Humor plays a crucial role in Noah's ability to connect with others. His experiences with language and cultural differences often lead to comedic misunderstandings that foster friendships. For example, Noah learned to speak multiple languages to navigate the diverse South African landscape, which he describes with wit. His ability to switch between languages not only helps him fit in but also becomes a source of humor as he recounts the reactions of those around him when he mispronounces words or uses them inappropriately.
Noah's comedic approach also helps him diffuse potentially dangerous situations. His humorous observations about apartheid and the absurdity of racial classifications allow him to challenge societal norms without direct confrontation. He notes, “The genius of Apartheid was convincing people who were the overwhelming majority to turn on each other,” using humor to critique a serious issue. This ability to laugh at the absurdities of his environment fosters camaraderie with those who share similar experiences, creating bonds that transcend racial and cultural divides.
</p>

<h3>Impact of Humor on Difficult Situations

</h3>
<p>The overall impact of humor in Noah's narrative is profound. It not only entertains but also educates readers about the complexities of life in a racially divided society. By framing his experiences with humor, Noah invites readers to reflect on serious issues while remaining engaged with his story. His comedic lens allows him to address painful topics, such as his mother’s struggles against patriarchal violence, with a sense of levity that makes the narrative accessible.
Noah's use of humor ultimately serves as a form of resistance against the injustices he faced. By highlighting the absurdity of discrimination and societal expectations, he encourages readers to reconsider their own biases and preconceptions. His ability to find humor in adversity not only showcases his resilience but also inspires others to approach their challenges with a similar mindset.

</p>

<h3>Personal Reflection on Humor
</h3>
<p>Reflecting on our own experiences, we find parallels in the way humor can be a powerful tool for connection and resilience. In challenging situations as a group, we have often relied on humor to ease tension and foster relationships. Like Noah, we have learned that laughter can bridge gaps between people, allowing for deeper understanding and camaraderie. Whether navigating cultural differences or facing personal challenges, humor has been a vital part of my interactions, helping to create a sense of belonging and community.

</p>

<h3>Conclusion
</h3>

<p>In conclusion, Trevor Noah's use of humor in Born a Crime is a multifaceted tool that enhances his storytelling, fosters connections, and provides a means of coping with life's difficulties. By intertwining humor with poignant reflections on race and identity, Noah not only entertains but also educates and inspires, leaving a lasting impact on his readers.
</p>

<button className='read-more' onClick={()=> setShowModals(false)}>Read Less</button>
                </div>


        </div>


        </div>
    );
};

export default Blog;