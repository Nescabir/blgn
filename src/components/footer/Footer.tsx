import './Footer.scss'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="copy">
                <p>&copy; { year } BLGN.</p>
            </div>
            <div id="wcb" className="carbonbadge wcb-d"></div>
        </footer>
    );
}

export default Footer