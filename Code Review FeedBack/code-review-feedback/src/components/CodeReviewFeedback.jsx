import React, { useState } from "react";

const FeedbackSystem = () => {
    const aspects = ["Readability", "Performance", "Security", "Documentation", "Testing"];

    // Usando um objeto para armazenar votos para cada aspecto
    // Estamos declarando nosso state com valor objeto inical

    const [votes, setVotes] = useState(
        aspects.reduce((acc, aspects) => {
            acc[aspects] = { upvote: 0, downvote: 0 }
            return acc
        }, {})
    )
    
    // Passamos 2 parametros para a nossa função, aspect e type
    const handleVote = (aspect, type) => {
        setVotes(prevVotes => ({ // passamos o prevVotes que ele vai pegar o valor atual do nosso state 
            ...prevVotes, // usamos o spread para trazer os valores anteores
            [aspect]: {
                ...prevVotes[aspect],
                [type]: prevVotes[aspect][type] + 1 // Dependendo do tipo que for passado vai acrecentar +1
            }

        }))
    }

    return (
        <div className="my-0 mx-auto text-center w-mx-1200">
            <div className="flex wrap justify-content-center mt-30 gap-30">
                {
                    aspects.map((item, index) => (
                        <div key={index} className="pa-10 w-300 card">
                            <h2>{item}</h2>
                            <div className="flex my-30 mx-0 justify-content-around">
                                <button
                                    className="py-10 px-15"
                                    data-testid={`upvote-Sbtn-${index}`}
                                    onClick={() => handleVote(item, 'upvote')}>
                                    👍 Upvote
                                </button>
                                <button
                                    className="py-10 px-15 danger"
                                    data-testid={`downvote-btn-${index}`}
                                    onClick={() => handleVote(item, 'downvote')}>
                                    👎 Downvote
                                </button>
                            </div>
                            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
                                Upvotes: <strong>{votes[item]?.upvote || 0}</strong>
                            </p>
                            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
                                Downvotes: <strong>{votes[item]?.downvote || 0}</strong>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeedbackSystem;
