import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleComp from "./singleComp";

type Competency = {
    ability: string;
    where: string;
}

const Competency = () => {
    const competencyArray: Competency[] = [
        {
            ability: "Competenze analitiche",
            where: "Pianificatore finanziario presso Leonardo Assicurazioni srl Società Benefit",
        },
        {
            ability: "Spanish",
            where: "Communication and Brand Specialist and Journalist presso People Connected Magazine",
        },
        {
            ability: "Vendite",
            where: "Consulente commerciale presso ABC Solutions SRL",
        },
        {
            ability: "Programmazione in Python",
            where: "Sviluppatore software presso CodeWorks Solutions",
        },
        {
            ability: "Digital marketing",
            where: "Digital Marketing Specialist presso WebGrowth Solutions",
        },
        {
            ability: "Gestione risorse umane",
            where: "HR Specialist presso PeopleFirst HR Solutions",
        },
        {
            ability: "SEO",
            where: "Esperto SEO presso SmartWeb Agency",
        },
        {
            ability: "Project management",
            where: "Project Manager presso BuildTech Innovators",
        },
        {
            ability: "Public speaking",
            where: "Trainer e Coach presso SpeechMasters Academy",
        },
        {
            ability: "Data analysis",
            where: "Data Scientist presso DataTrend Consulting",
        },
        {
            ability: "Social media marketing",
            where: "Social Media Manager presso TrendBuzz Digital",
        },
        {
            ability: "Problem solving",
            where: "Supervisor presso Creative Solutions Hub",
        },
        {
            ability: "Contabilità",
            where: "Contabile presso FinancePoint SRL",
        },
        {
            ability: "Scrittura creativa",
            where: "Copywriter presso Words&Co Creative Agency",
        },
        {
            ability: "Traduzione professionale",
            where: "Traduttore presso GlobalWords Solutions",
        },
        {
            ability: "Cybersecurity",
            where: "Cybersecurity Analyst presso SecureTech Consulting",
        },
        {
            ability: "Leadership",
            where: "Manager presso TeamLeaders Academy",
        },
        {
            ability: "Grafica digitale",
            where: "Graphic Designer presso CreativeAgency Pro",
        },
        {
            ability: "Assistenza clienti",
            where: "Addetto al supporto presso HelpDesk Online SRL",
        },
        {
            ability: "Pianificazione strategica",
            where: "Consulente aziendale presso StrategyConsult SRL",
        },
        {
            ability: "Risoluzione dei conflitti",
            where: "HR Consultant presso WorkPlace Mediation Services",
        },
        {
            ability: "Sviluppo di applicazioni mobili",
            where: "Sviluppatore presso MobileCraft Development",
        },
        {
            ability: "Italiano",
            where: "Tutor linguistico presso LanguageSuccess SRL",
        },
        {
            ability: "Gestione eventi",
            where: "Event Manager presso StarEvents Agency",
        },
        {
            ability: "Marketing strategico",
            where: "Marketing Consultant presso ThinkBig Marketing Solutions",
        },
        {
            ability: "Scrittura tecnica",
            where: "Technical Writer presso TechDocs SRL",
        },
        {
            ability: "Sviluppo web",
            where: "Web Developer presso InnovateWeb Solutions",
        },
        {
            ability: "Gestione di squadra",
            where: "Team Leader presso Collaborative Growth Enterprises",
        },
        {
            ability: "Inglese",
            where: "Trainer presso EnglishWorld Academy",
        },
        {
            ability: "Pianificazione finanziaria",
            where: "Financial Advisor presso FutureWealth Planning",
        },
    ];

    const [comp, setComp] = useState<null | Competency[]>(null);

    const getRandom = (array: Competency[]) => {
        const min = 3;
        const max = 8;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const result = ([...array].sort(() => 0.5 - Math.random()).slice(0, randomNumber));
        setComp(result)
    }

    useEffect(() => {
        getRandom(competencyArray)
    }, [])

    return (
        <>
            <Container fluid>
                {comp &&
                    <Row>
                        <Col className="ps-2">
                            <h4>Competenze</h4>
                            {comp.map((item, i) => {
                                console.log(item)
                                return <SingleComp key={i} item={item} />
                            })}
                        </Col>
                    </Row>}
            </Container>
        </>
    )
}

export default Competency