import React from 'react';
import "./_info.scss"


const Info = () => {


    return (
        <div className="info_container">
            <h1 className="infoHeader">Niniejsza strona ma umożliwia naukę języka programowania JavaScript oraz tematów
                z nim związanych metodą <a href="https://pl.wikipedia.org/wiki/Fiszka">fiszek</a>. </h1>
            <div className="cite_container">
                <i className="fas fa-quote-left"/>
                <cite className="cite">"Nauka to walka z zapominaniem, dlatego należy powtarzać to, czego się
                    nauczyliśmy.
                    Nie należy jednak powtarzać zbyt często i wszystkiego, żeby nauka nie stała się nudna i męcząca.
                    Potrzebny jest system nauki, który sprawi, że trudniejszy materiał będzie powtarzany odpowiednio
                    często,
                    by go zapamiętać, zaś materiał łatwiejszy — na tyle rzadko, by go nie zapomnieć.
                </cite>
            </div>
            <span className="citeAuthor"><a href="https://pl.wikipedia.org/wiki/Sebastian_Leitner">Sebastian Leitner</a> - twórca metody fiszek</span>

            <article className="article_container">
                Autor powyższych słów, w bestsellerze "Naucz się uczyć" opisuje wspomniany system nauki i uświadamia,
                jak się uczyć, żeby się nauczyć. Istotą metody jest samodzielna ocena opanowania danego zagadnienia
                poprzez przypisanie odpowiedniego poziomu, który jednocześnie reprezentuje częstotliwość pojawiania się
                pytania w przyszłości
            </article>


            <div className="scale_container">
                <span>Skala opanowania:</span>
                <p><span>&#128514;</span> - Łatwizna! Pytanie nie będzie się więcej pojawiać.</p>
                <p><span>&#128527;</span> - Chyba to mam! Pytania nie będzie się częściej pojawiać. </p>
                <p><span>&#128528;</span> - Prawie... Pytanie będzie pojawiać się 2 razy częściej.</p>
                <p><span>&#128529;</span> - Coś tam kojarzę, ale nie do końca. Pytanie będzie pojawiać się 3 razy
                    częściej.</p>
                <p><span>&#128530;</span> - Wrrr... nie mogę tego zapamiętać. Pytanie będzie pojawiać się 4 razy
                    częściej.</p>
                <p><span>&#128544;</span> - Are you talking to me? Pytanie będzie pojawiać się 5 razy częściej.</p>
            </div>
        </div>

    )
}

export default Info;

