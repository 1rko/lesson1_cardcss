import {CardStyled} from "./Card.styled";
import Desert from "./../assets/Desert.webp"
import {ImgStyled} from "./img.styled";
import {Title} from "./Title.styled";
import {Subscription} from "./Subscription.styled";
import {Button} from "./Button.styled";
import {ButtonPanel} from "./ButtonPanel.styled";
import {Input} from "./Input.styled";
import {ContentWrapper} from "./ContentWrapper.styled";

type CardPropsType = {
    img: {
        src: string,
        alt: string
    },
    title: string,
    subscribtion: string
}

export const Card = ({img, title, subscribtion}: CardPropsType) => {
    return <>
        <CardStyled>
            <ImgStyled src={img.src} alt={img.alt}/>
            <ContentWrapper>
                <Title>{title}</Title>
                <Subscription>{subscribtion} </Subscription>
                <ButtonPanel>
                    <Button primary={'true'}>See more</Button>
                    <Button secondary={'true'}>Save</Button>
                </ButtonPanel>
            </ContentWrapper>
        </CardStyled>

        {/*<ButtonPanel>
            <Button bgColor={'pink'} borderColor={'yellow'}>Hello</Button>
            <Button bgColor={'red'} borderColor={'green'}>Hello</Button>
            <Button primary>Hello</Button>
            <Button outlined>Hello</Button>
            <Button>Hello</Button>
        </ButtonPanel>
        <ButtonPanel>
            <Input type="checkbox"/>
            <Input type="radio"/>
            <Input type="text"/>
            <Input type="password"/>
            <Input/>
        </ButtonPanel>*/}
    </>
}