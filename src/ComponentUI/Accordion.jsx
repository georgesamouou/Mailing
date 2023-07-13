import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const Accordions = () => {
    const data = [
        {title: "Nombre ", content: "Lorem ipsum dolor sit amet."},
        {title: "Historique", content: "Lorem ipsum dolor sit amet."},
        {title: "Statistique", content: "Lorem ipsum dolor sit amet."},
    ];
    return (
        <Accordion className="accordionContainer">
            {data.map((item, index) => (
                <AccordionItem  key={index}>
                    {({open}) => (
                        <>
                            <AccordionHeader className={`accordionHeader p-2 ${open ? 'accordion-active-head' : ''}`}>
                                <span className={`accordion-title ${open ? 'accordion-active' : ''}`}>{item.title}</span>
                            </AccordionHeader>

                            <AccordionBody className="">
                                <div className="accordion-body accordionBody">
                                    {item.content}
                                </div>
                                <div className="accordion-body accordionBody">
                                    {item.content}
                                </div>
                            </AccordionBody>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};
export default Accordions;