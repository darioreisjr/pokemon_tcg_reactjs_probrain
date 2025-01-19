import './styles.css'

export default function Header() {
    return (
        <header >
            <div className="header-box">
                <div className='header-content'>
                    <div>
                        <img src='./pokemon-logo.svg' className='header-title' />
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li><a href='#'>Documentação</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )

}