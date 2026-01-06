export default function Home() {
    return (
        <main className="container">
            <section className="hero">
                <h1>3D Artist & Designer</h1>
                <p>3D • Automotive • Livery • Photorealism</p>
            </section>

            <section className="projects">
                <h2>Projects</h2>

                <div className="grid">
                    <div className="card">
                        <img src="/project1.jpg" alt="F1 Tire Render" />
                        <h3>F1 Tire Render</h3>
                        <p>Blender • Cycles • 8K Textures</p>
                    </div>

                    <div className="card">
                        <img src="/project2.jpg" alt="GT3 Livery" />
                        <h3>GT3 Livery Concept</h3>
                        <p>Automotive Design</p>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h2>Contact</h2>
                <p>Email: yourmail@gmail.com</p>
                <p>Fiverr: fiverr.com/yourname</p>
            </section>
        </main>
    );
}
