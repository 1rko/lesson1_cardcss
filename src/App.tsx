import {Card} from "./components/Card";
import {GlobalStyle} from "./components/globalStyles.styled";
import {myTheme} from "./myTheme.styled";
import {ThemeProvider} from 'styled-components';
import {CardsWrapper} from "./components/CardsWrapper.styled";

const tempSRC = 'data:image/jpeg;base64,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'

const cardsArray = [
    {
        img: {
            src: tempSRC,
            alt: 'Пустыня'
        },
        title: 'Пустыня Сахара',
        subscribtion: 'Описание пустыни Сахара'
    },
    {
        img: {
            src: tempSRC,
            alt: 'Равнина'
        },
        title: 'Равнина',
        subscribtion: 'Описание Равнины'
    },
    {
        img: {
            src: tempSRC,
            alt: 'Горы'
        },
        title: 'Горы',
        subscribtion: 'Описание гор'
    },
    {
        img: {
            src: tempSRC,
            alt: 'Пустыня'
        },
        title: 'Пустыня Сахара',
        subscribtion: 'Описание пустыни Сахара'
    },
    {
        img: {
            src: tempSRC,
            alt: 'Равнина'
        },
        title: 'Равнина',
        subscribtion: 'Описание Равнины'
    },
    {
        img: {
            src: tempSRC,
            alt: 'Горы'
        },
        title: 'Горы',
        subscribtion: 'Описание гор'
    }
]

function App() {

    return (
        <>
            <ThemeProvider theme={myTheme}>
                <GlobalStyle/>
                <CardsWrapper>
                    {cardsArray.map((item, index) => (
                        <Card
                            key={index}     //temp - индекс массива заменится на id
                            img={{src: item.img.src, alt: item.img.alt}}
                            title={item.title}
                            subscribtion={item.subscribtion}
                        />
                    ))}
                </CardsWrapper>
            </ThemeProvider>
        </>
    )
}

export default App
