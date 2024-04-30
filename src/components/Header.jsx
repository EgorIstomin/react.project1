import react_logo from "../components/react_logo.jpg"

export default function Header() { 
    const now = new Date()
    return ( 
      <header> 
        <img src={react_logo} alt="react_logo"></img>
      <h3>Egor's project1</h3>
      <main> 
        <section> 
            <h3>My approach of study</h3>
            <ul>
                <li>
                    <p></p>
                </li>
                <li>
                    <p>

                    </p>
                </li>
                <li>
                    <p></p>
                </li>
            </ul>
        </section>
      </main>
      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
    )
  }