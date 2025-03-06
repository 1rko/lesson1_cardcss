import {CardWrapper} from "./CardWrapper.styled";
import Desert from "./../assets/Desert.webp"
import {ImgStyled} from "./img.styled";
import {Title} from "./Title.styled";
import {Subscription} from "./Subscription.styled";
import {Button} from "./Button.styled";
import {ButtonPanel} from "./ButtonPanel.styled";
//import {Input} from "./Input.styled";
import {ContentWrapper} from "./ContentWrapper.styled";


export const Card = () => {
    return <>

        <CardWrapper>
            <ImgStyled src={Desert} alt='Пустыня'/>
            <ContentWrapper>
                <Title>Headline</Title>
                <Subscription>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                    venen.Faucibus. </Subscription>
                <ButtonPanel>
                    <Button primary>See more</Button>
                    <Button secondary>Save</Button>
                </ButtonPanel>
            </ContentWrapper>
        </CardWrapper>


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