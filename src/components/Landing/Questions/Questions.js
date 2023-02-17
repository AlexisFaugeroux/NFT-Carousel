import './style.scss'
import { Accordion, Icon } from 'semantic-ui-react'
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Questions() {
    let FAQAnim = useRef(null);

    useEffect(() => {

        const questionsTitle = FAQAnim.current;
        gsap.fromTo( questionsTitle, 
            {
                x : 0,
                y: 0,
                rotateZ: 25,
                opacity : 0,
            },
            {
                x : 0,
                rotateZ: 0,
                scrollTrigger: {
                    trigger: questionsTitle,
                    toggleActions: "play complete"
                },
                opacity : 1,
                duration: 2.75,
                ease: "elastic",
                delay : 1.45
            }
        )
    }, []);

    const [activeIndex, setActiveIndex] = useState(1);

    // Handle Checkbox Index
    const handleIndex = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex);
    };

    return (
        <>
            <section className='question'>
                <div ref={FAQAnim} className='question_container'>
                    <h3 className='question_container_title'>F.A.Q</h3>
                    <Accordion className='question_container_accordion' styled>
                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={handleIndex}
                        >
                        <Icon name='dropdown' />
                        What kinds of dogs are there?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <p>
                            There are many breeds of dogs. Each breed varies in size and
                            temperament. Owners often select a breed of dog that they find to be
                            compatible with their own lifestyle and desires from a companion.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 2}
                            index={2}
                            onClick={handleIndex}
                        >
                        <Icon name='dropdown' />
                        How do you acquire a dog?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                        <p>
                        Three common ways for a prospective owner to acquire a dog is from pet
                        shops, private owners, or shelters.
                        </p>
                        <p>
                        A pet shop may be the most convenient way to buy a dog. Buying a dog
                        from a private owner allows you to assess the pedigree and upbringing
                        of your dog before choosing to take it home. Lastly, finding your dog
                        from a shelter, helps give a good home to a dog who may not find one
                        so readily.
                        </p>
                        </Accordion.Content>
                    </Accordion>
                </div>
            </section>
        </>
    );
}

export default Questions;
