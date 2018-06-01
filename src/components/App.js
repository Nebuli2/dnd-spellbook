import React from "react";
import styled from "styled-components";
import { Glyphicon, Navbar, Label } from "react-bootstrap";
import SpellList from "./SpellList";
import SpellModal from "./SpellModal";
import SpellData from "./SpellData";
import { filtered } from "../util/list";

const filterText = (spells, text) => filtered(spells, spell => {
    console.log(text);
    if (text) {
        if (spell.name.contains(text)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
})

const SearchBar = styled.input`
    background: rgb(32, 32, 32);
    color: white;
    border: 0px;
    padding: 5px;
`;

const NavbarStyled = styled(Navbar) `
    border-radius: 0px;
    border: 0;
    background: rgb(64, 64, 64);
    padding: 10px;
    text-align: left;
    margin: 0px;
    color: white;
`;

const DisplayedSpell = (props) => props.spell
    ? <SpellModal show={props.show} onHide={props.onHide} spell={props.spell} />
    : <span />;

const Content = styled.div`
    width: 1000px;
    margin: auto;
    padding: 20px;
    margin-top: 40px;
`;

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filterText: "",
            showSpellModal: false,
            selectedSpell: null
        };
        this.hideModal = this.hideModal.bind(this);
        this.selectSpell = this.selectSpell.bind(this);
        this.handleFilterTextChanged = this.handleFilterTextChanged.bind(this);
    }

    selectSpell(spell) {
        this.setState({ ...this.state, selectedSpell: spell, showSpellModal: true });
    }

    hideModal() {
        this.setState({ ...this.state, selectedSpell: null, showSpellModal: false });
    }

    handleFilterTextChanged(event) {
        this.setState({ ...this.state, filterText: event.target.value });
        console.log(this.state);
    }

    /**
     * Renders the App.
     */
    render() {
        return (
            <div>
                <NavbarStyled fixedTop>
                    <SearchBar type="text" onChange={this.handleFilterTextChanged} />
                </NavbarStyled>
                <Content>
                    <SpellList spells={SpellData.filter(spell => spell.name.indexOf(this.state.filterText) !== -1)} onSpellClick={this.selectSpell} />
                </Content>
                <DisplayedSpell show={this.state.showSpellModal} onHide={this.hideModal} spell={this.state.selectedSpell} />
            </div>
        );
    }
}

const RITUAL_TAG = "Ritual";
const RitualTag = (props) => props.ritual
    ? <span> <Label bsStyle="primary">{RITUAL_TAG}</Label></span>
    : <span />;

const CONCENTRATION_TAG = "Concentration";
const ConcentrationTag = (props) => props.concentration
    ? <span> <Label bsStyle="danger">{CONCENTRATION_TAG}</Label></span>
    : <span />;

const TagHolder = styled.span`
    float: right;
`;

const SpellTags = (props) => (
    <props.TagHolder>
        <RitualTag ritual={props.ritual} />
        <ConcentrationTag concentration={props.concentration} />
    </props.TagHolder>
);

export { SpellTags };