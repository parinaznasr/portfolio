import React, {useEffect, useState} from "react";
import {
    Typography, Card, CardContent, Button, makeStyles, CardActions,
} from '@material-ui/core';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from "@mui/material/Container";

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { Galleria } from 'primereact/galleria';


const getImages = () => {
    return fetch('./data/images.json')
        .then(res => res.json())
        .then(d => d.data);
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        display: 'flex',
        marginBottom: theme.spacing(2),
    },
    media: {
        width: 300,
        height: 200,
        objectFit: 'cover',
    },
}));

const projects = [
    {
        title: 'Project 1',
        description: 'Our proposed landscape architecture project aims to transform an urban vacant lot into a vibrant community park that promotes social interaction, ecological sustainability, and aesthetic beauty. The design concept incorporates a harmonious blend of natural elements and contemporary features, creating a serene and inviting environment for residents and visitors alike. The park will feature lush green spaces, meandering pathways, and native plantings that enhance biodiversity and provide habitat for local wildlife. Additionally, interactive art installations and recreational amenities such as playgrounds and seating areas will foster community engagement and create gathering spaces for various activities. By seamlessly integrating nature, art, and functionality, our landscape architecture project seeks to rejuvenate the urban fabric, enriching the quality of life for individuals and fostering a strong sense of community pride.',
        images: ['p1', 'p2', 'p3', 'p4'],
    },
    {
        title: 'Project 2',
        description: 'Our visionary Islamic architecture project seeks to revive the timeless grandeur and spiritual essence of Isfahan, a renowned center of Islamic architecture. Inspired by the rich cultural heritage of the Safavid dynasty, our design aims to recreate the enchanting atmosphere of the historic city, characterized by intricate geometric patterns, mesmerizing tilework, and harmonious proportions. The project envisions the construction of a breathtaking mosque, featuring an awe-inspiring central dome, towering minarets, and a tranquil courtyard adorned with mesmerizing fountains. The intricate ornamentation, meticulously crafted calligraphy, and delicate arabesque motifs will pay homage to the region\'s architectural legacy. Our goal is to create a sacred space that not only serves as a place of worship but also as a beacon of knowledge and enlightenment, inviting people of all backgrounds to experience the beauty and serenity of Islamic Isfahanian architecture. Through this project, we aspire to revive the glory of the past while celebrating the enduring legacy of Islamic art and architecture in a contemporary context.',
        images: ['l1', 'l2', 'l3', 'l4'],
    },
];

const ProjectGalleria = () => {
    const classes = useStyles();
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    };

    const [images, setImages] = useState(null);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc}  alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{  height: '100px', display: 'block' }} />;
    }
    const caption = (item) => {
        return (
            <React.Fragment>
                <h4 className="mb-2">{item.title}</h4>
                <p>{item.alt}</p>
            </React.Fragment>
        );
    }

    console.log(images)
    return (
        <Container>
            <div className={classes.root}>
                { projects.map((project, index) => (
                    <Card key={index} className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.description}
                            </Typography>
                            {expandedIndex === index ? (
                                <div className="card">
                                    <Galleria
                                        circular autoPlay transitionInterval={3000}
                                        value={images.filter(item => {console.log(index); return item.project === expandedIndex.toString()})}
                                        responsiveOptions={responsiveOptions}
                                        numVisible={4}
                                        item={itemTemplate}
                                        thumbnail={thumbnailTemplate}
                                        caption={caption}
                                        style={{ maxWidth: '640px' }}
                                    />
                                </div>
                            ) : null}
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => handleExpand(index)}
                            >
                                {expandedIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </Container>
    );
}

export default ProjectGalleria;
