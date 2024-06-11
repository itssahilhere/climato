import React, { useState } from 'react';
import Sawal from './Sawal';
import Options from './Options';
import './QuestionContainer.css';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

const questionnaire = [
    {
        question: "How do you primarily commute to work or school?",
        options: ["Car", "Public transportation", "Bicycle or walk", "Other"],
    },
    {
        question: "How many miles do you drive per week (on average)?",
        options: [],
    }, {
        question:
            "What is the average fuel efficiency of your vehicle (in miles per gallon)?",
        options: [],
    },
    {
        question: "How often do you take domestic flights per year?",
        options: ["None", "1-2 times", "3-5 times", "More than 5 times"],
    },
    {
        question: "How often do you take international flights per year?",
        options: ["None", "1-2 times", "3-5 times", "More than 5 times"],
    },
    {
        question: "How many household members are there in your home?",
        options: [],
    },
    {
        question:
            "What is your average monthly electricity consumption (in kilowatt-hours)?",
        options: [],
    },
    {
        question:
            "Do you use renewable energy sources for your electricity consumption?",
        options: ["Yes", "No"],
    },
    {
        question: "How often do you eat meat or dairy products?",
        options: ["Every meal", "Daily", "Several times a week", "Rarely or never"],
    },
    {
        question: "How often do you recycle household waste?",
        options: ["Always", "Often", "Sometimes", "Rarely or never"],
    },
    {
        question:
            "How often do you use energy-efficient appliances and light bulbs?",
        options: ["Always", "Often", "Sometimes", "Rarely or never"],
    },
    {
        question: "Do you compost organic waste?",
        options: ["Yes", "No"],
    },

    // Add other questions and options here
];

const QuestionContainer = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    if (currentQuestionIndex === questionnaire.length) {
        navigate('/landing');
    }

    const handleOptionClick = () => {
        // Move to the next question when an option is clicked
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className="question-container">
            {/* Render current question and options */}
            {currentQuestionIndex < questionnaire.length && (
                <>
                    <Sawal value={questionnaire[currentQuestionIndex].question} />
                    <Options
                        options={questionnaire[currentQuestionIndex].options}
                        onOptionClick={handleOptionClick}
                    />
                </>
            )}
            {/* Display a message when all questions are answered */}
            {currentQuestionIndex === questionnaire.length && (
                <p>All questions answered. Thank you!</p>
            )}
            <button className='button1' onClick={() => navigate('/landing')}>Skip</button>
        </div>
    );
};

export default QuestionContainer;

