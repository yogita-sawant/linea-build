import './carosal.css';

function Carosal() {
    const cardData = [
        { title: '299', description: 'Dapps' },
        { title: '3.7M', description: 'Active Users' },
        { title: '36.5M', description: 'Transactions' },
        { title: '3.7M', description: 'Addresses' },
        { title: '323K', description: 'Proofs Verified on Ethereum' },
        { title: '$382M', description: 'Saved on Gas Fees' },
        { title: '142K', description: 'Contracts Deployed' },
        { title: '299', description: 'Dapps' },
        { title: '3.7M', description: 'Active Users' },
        { title: '36.5M', description: 'Transactions' },
        { title: '3.7M', description: 'Addresses' },
        { title: '323K', description: 'Proofs Verified on Ethereum' },
        { title: '$382M', description: 'Saved on Gas Fees' },
        { title: '142K', description: 'Contracts Deployed' }
    ];

    return (
        <div className='main-div'>
            <div className='main-card'>
                {cardData.map((card, index) => (
                    <div key={index} className="info-card-layout">
                        <h2 className='info-card-title'>{card.title}</h2>
                        <p className='info-card-des'>{card.description}</p>
                    </div>
                ))}
            </div>
            <div className='card-bottom-text'>Bootstrapped by Consensys</div>
        </div>
    );
}

export default Carosal;