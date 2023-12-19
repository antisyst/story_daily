import styled from "styled-components";
import FlowImage from '../assets/flow.png';
import ChildImage from '../assets/child.jpg';
import { useEffect } from 'react';
import Intro from "./intro";


const MainLayout = styled.main `
  text-align: center;
  padding-top: 3vh;
  background-repeat: norepeat;
  background-position: center;
  background-attachment: fixed;
  backdrop-filter: invert(1.2);
  min-height: 100vh;
  background: url("https://i.pinimg.com/564x/5a/83/fe/5a83fe1b2ddfdacc72638fcadfda065a.jpg");
  height: auto;
`
const MainContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`
const StoryItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 380px;
    height: auto;
    border-radius: 16px;
    padding: 23px 15px;
    position: relative;
    backdrop-filter: blur(30px);

    h1, p {
        text-align: left;
    }

    h1 {
        margin: 7px 0;
        font-size: 20px;
    }

    p {
        font-size: 17px;
        font-weight: 500;
        margin-top: 10px;
    }

    img {
        width: 320px;
        height: auto;
        object-fit: cover;
        margin-top: 10px;
    }

    @media only screen and (max-width: 700px)  {
        width: 100%;
    }
`
const MainPage = () => {
    // 

    useEffect(() => {
        const audio = new Audio('https://audio.jukehost.co.uk/shvhB3VCq2PPVoWQzFXMG39FubeRyzrM');
        audio.play();
    
        audio.onended = () => {
          audio.currentTime = 0;
          audio.play();
        };
    
        return () => {
          audio.pause();
        };
      }, []);



  return (
    <MainLayout>
        <Intro/>
    <MainContainer>
        <StoryItem>
            <h3>24 Noyabr 2023</h3>
            <p>bu qiz, her ilin dekabri kimese vuruluram, deyesen bu ilin hekayesi bu olacag, ala cox xosum gelire ble, mennen vaxt kecirir goresen</p>
        </StoryItem>
        <StoryItem>
            <h3>28 Dekabr 2023</h3>
            <img src="https://i.pinimg.com/564x/8e/96/2e/8e962ee22da44c63f1edbc94e7ddfa5e.jpg" alt="" />
            <p>sekile baxanda yadima dusur, vurulmusam ala</p>
        </StoryItem>
        <StoryItem>
            <h3>3 Dekabr 2023</h3>
            <p>oluremde ala bu qizdan otru, soyusde soyse isteyiremde, dozmurem isteyrem, daragina, isti ellerine, gulusune ayda, sacimi nece dariyirdi ala, ayble yadima salanda omrume il gelir</p>
        </StoryItem>
        <StoryItem>
            <h3>8 Dekabr 2023</h3>
            <p>sozume nie qulaq asmir ala, isteyen adam sozume qulaq asar, belke meni firradir</p>
        </StoryItem>
        <StoryItem>
            <h3>11 Dekabr 2023</h3>
            <p>yene hami ustume gelir, heckim meni basa dusmur, ayble men ancag bu qizi isteyrem, niye heckim onu normal tanimir, niye ozunu bele eliyib, kim ne deyirse desin ne ad qoyursa qoysun goreyde nolacag</p>
        </StoryItem>
        <StoryItem>
            <h3>14 Dekabr 2023</h3>
            <p>ne qeder deyrem soyus soyme yene soyur, basa dusmurki hami pis baxir, cox sey isteyirem ala, bidene geyimiynen danisigina fikir versin fsoda, hami pis baxir uje mene</p>
        </StoryItem>
        <StoryItem>
            <h3>14 Dekabr 2023</h3>
            <p>yaxinda goruseceyiy onsuz, herseyi ona demeyden basga carem yoxdu uje, meni cox caresiz veziyete salir, el cekemmiremde ala bunnan</p>
        </StoryItem>
        <StoryItem>
            <h3>16 Dekabr 2023</h3>
            <img src={FlowImage} alt="" />
            <p>sayilacag saatlar, ala bunu verseydim day ureyim partladi, dozmureme uje, goren qucaqlayar ala</p>
        </StoryItem>
        <StoryItem>
            <h3>17 Dekabr 2023</h3>
            <p>ble nie bele oldu, cokmuseme temiz, dozemmirem ala, gulde qaldi neyniyecem, arzum ureyimde qaldiye, ble niye istediyime hecvaxt catmiram men, niye mene nesibim olmur, o qeder danisdiglarimiz getdi, inana bilmiremde, sevirdime, menim bextim nie yoxdu, bes o qeder sey danismisdigki, yara kimi qaldi ureyimde</p>
        </StoryItem>
        <StoryItem>
            <h3>17 Dekabr 2023</h3>
            <img src={ChildImage} alt="" />
            <p>Bes buna noldu, ayble, basima hec bele sey gelmemisdi. o qeder xeyallarim varydi, hamsi ucdu ala hecne qalmadi</p>
        </StoryItem>
        <StoryItem>
            <h3>18 Dekabr 2023</h3>
            <p>pis sozlerin sezonuda basladi, meni istemeyib deyesen, baglandim ala, nece yaddan cixaracam onu, mene nifret eliyir ala, 2 gun evvel balamnan ureyimnen danisirdig, 1 gune bu qedermi sey deyiser, neyse bir esgde burda baglandi, qismetde varsa yollarimiz eyni dusecey ( İnşAllah ), men deyirdim fso heckimi ureyden isteye bilmerem, hemin adamin cismini tesevvur eliye bilmirdim, ama inandirdi, hecvaxt unudan deyilem, oz yeri var hemise olacag, ala sesi qulagimadadiye, menim ucunbunnan gozel ses var goresen...</p>
        </StoryItem>
        <StoryItem>
            <h3>19 Dekabr 2023</h3>
            <p>ayble yene hami deyir basin burax, oda oz kefindedi, zerre qeder pis olmayib, oglan etiketleyib story paylasir, menede yalannan deyir seni isteyirem zad, ayble neter bosu bosuna inandim ala, indi uje tanidim onu, yene menim adim pis cixir, bilmirde ala neler olubsa, gop gop seylere inanib, vaxtinda hami deyirdi basin burax, buraxmirdim isteyirdim, axirda bildimki ele axmag menem</p>
        </StoryItem>
     </MainContainer>
     <div className='last_caption'>
        <h2>Our love maybe ended, but my love never ended... ∞</h2>
    </div>
    </MainLayout>
  )
}

export default MainPage
