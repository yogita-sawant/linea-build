import './home.css';

function Home() {
    return (
        <>
            <div className='home-main-div'>
                <div className='home-content'>
                    <h5>Where dapps thrive</h5>
                    <div className='home-subtitle-container'>
                        <p>Linea is home to the most innovative web3 projects</p>
                        <p>Linea has established the most robust security system in web3</p>
                        <p >Linea is committed to decentralization</p>
                    </div>
                    <div className='home-btn'><button className='button'>BRIDGE TO LINEA</button></div>
                </div>
                <div className='home-image-section'>
                    <img src='/images/circle.png' alt="hero-circle" data-aos="zoom-in" loading="lazy" width="290" height="290" decoding="async" data-nimg="1" />
                </div>
            </div>
        </>
    );
}

export default Home;
