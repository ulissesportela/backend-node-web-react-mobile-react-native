import React, { useState } from 'react'
import './styles.css'
import logoImg from "../../assets/logo.svg"
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [watsapp, setWatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            watsapp,
            city,
            uf
        }

        try {
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.id}`)

            history.push('/')

        } catch (error) {
            alert(`Erro no cadastro, tente novamente.`)
        }
    }

    return (
       <div classuf="regUster-container">
           <div className="content">
               <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de su aONG.</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Tenho cadastro
                </Link>
               </section>
               <form onSubmit={handleRegister}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome da ONG"/>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"/>
                    <input value={watsapp} onChange={e => setWatsapp(e.target.value)} placeholder="Watsapp"/>
                    <div className="input-group">
                        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade"/>
                        <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
               </form>
           </div>
       </div> 
    )
}

export default Register