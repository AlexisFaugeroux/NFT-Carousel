import './style.scss'

function Partners() {
    return (
        <>
        <section className='partners'>
            <div className="partners_container">
                <img className='partners_container-metamask partners-logo' src={"/assets/logos/metamask.svg"} alt="metamask" />
                <img className='partners_container-solana partners-logo' src={"/assets/logos/solana.svg"} alt="solana" />
                <img className='partners_container-opensea partners-logo' src={"/assets/logos/opensea.svg"} alt="opensea" />
                <img className='partners_container-ledger partners-logo' src={"/assets/logos/ledger.svg"} alt="opensea" />
            </div>
        </section><div className="wave-wrapper">
                <img src="/assets/wave-top.svg" alt="Wave" />
            </div>
        </>
    );
}

export default Partners;


