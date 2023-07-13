import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const Accordions = ({displayContent}) => {
    const data = [
        {title: "Enregistrements ", content: "Lorem ipsum dolor sit amet."},
        {title: "Electriciens", content: "Lorem ipsum dolor sit amet."},
        {title: "Statistique", content: "Lorem ipsum dolor sit amet."},
        {title: "Ordonances et Plannification", content: "Lorem ipsum dolor sit amet."},
    ];
    const handleDisplay = (element)=>{
        displayContent(element);
        console.log('display element')
        console.log(element)
    }
    return (
        <Accordion className="accordionContainer">
            {data.map((item, index) => (
                <AccordionItem onClick={()=>handleDisplay(item.title)}  key={index}>
                    {({open}) => (
                        <>
                            <AccordionHeader className={`accordionHeader p-2 ${open ? 'accordion-active-head' : ''}`}>
                                <span className={`accordion-title ${open ? 'accordion-active' : ''}`}>{item.title}</span>
                            </AccordionHeader>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};
export default Accordions;