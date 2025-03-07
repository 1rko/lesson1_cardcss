import {CardStyled} from "./Card.styled";
import Desert from "./../assets/Desert.webp"
import {ImgStyled} from "./img.styled";
import {Title} from "./Title.styled";
import {Subscription} from "./Subscription.styled";
import {Button} from "./Button.styled";
import {ButtonPanel} from "./ButtonPanel.styled";
//import {Input} from "./Input.styled";
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
                    <Button primary>See more</Button>
                    <Button secondary>Save</Button>
                </ButtonPanel>
            </ContentWrapper>
        </CardStyled>

        {/*<ButtonPanel>
            <ButtonStyled bgColor={'pink'} borderColor={'yellow'}>Hello</ButtonStyled>
            <ButtonStyled bgColor={'red'} borderColor={'green'}>Hello</ButtonStyled>
            <ButtonStyled primary>Hello</ButtonStyled>
            <ButtonStyled outlined>Hello</ButtonStyled>
            <ButtonStyled>Hello</ButtonStyled>
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