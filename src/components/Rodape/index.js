import React from 'react';
import Iframe from 'react-iframe'
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
//import MaskedInput from 'react-text-mask';
import axios from 'axios';
import Formulario from '../../Form';

export default class Rodape extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                fields: { feedback: '', name: '', fone: '', email: ''},
                errors: {}
            }
        this.enviaFormContato = this.enviaFormContato.bind(this);
    }
    
        enviaFormContato(e) {
        e.preventDefault();
        if (this.validaForm()) {

            let fields = {};

            // limpa os campos do formulario
            fields["nome"] = '';
            fields["telefone"] = '';
            fields["email"] = '';
            fields["mensagem"] = '';

            this.setState({ fields: fields });
            alert("Form enviado");

            // dados que serao enviados para api
            const data = {
                service_id: 'contato_agripoint',
                template_id: 'template_ff3W3H2K',
                user_id: 'user_TSLzB8dCPqTfGxWMJXNIF',
                template_params: {
                    'username': 'James'
                }
            };
      
            // faz o post na api
            axios({
                method: 'post',
                url: 'https://api.emailjs.com/api/v1.0/email/send',
                data: data,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });
        }
    }


    render() {
        return (
            <div id="rodape">
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7312.960307846048!2d-46.66240172251435!3d-23.587106906191863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1a91c26a3%3A0x5fd57fbcb6222e5a!2sParque%20Ibirapuera%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1569524080759!5m2!1spt-BR!2sbr" width="100%" height="auto" display="initial" position="relative" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <h2>Redes sociais</h2>
                            <p>Acompanhe nosso trabalho pelas nossas redes sociais</p>
                            <ul className="icons-redes-sociais">
                                <li><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
                                <li><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
                                <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                <li><i className="fa fa-linkedin-square" aria-hidden="true"></i></li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4} className="mb-4">
                            <h2>Localização</h2>
                            <p>Centro de Cultura e Eventos Plínio Arlindo de Nes.</p>
                            <p>R. Assis Brasil, 20 D Centro, Chapecó - SC</p>
                            <p>Fone para contato: (19) 3432-2199</p>
                        </Col>
                        <Col xs={12} md={4} id="form-contato">
                            <h2>Contato</h2>

                            <Formulario />

                           

                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}