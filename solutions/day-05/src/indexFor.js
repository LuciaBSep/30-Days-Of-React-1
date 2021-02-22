import React from 'react'
import ReactDOM from 'react-dom'
//import validator from 'validator'


var validator = require('validator')

const options = [
    {
      value: '',
      label: '-- Select Country--',
    },
    {
      value: 'Finland',
      label: 'Finland',
    },
    {
      value: 'Sweden',
      label: 'Sweden',
    },
    {
      value: 'Norway',
      label: 'Norway',
    },
    {
      value: 'Denmark',
      label: 'Denmark',
    },
    {
        value: 'Argentina',
        label:'Argentina',
    }
  ]


  const selectOptions = options.map(({value,label}) => (<option value={value}>{label}</option>))



class Formulario extends React.Component
{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        weight: '',
        gender: '',
        file: '',
        skills: {
            html:false,
            css:false,
            javascript:false,
        },
        touched: {
            firstName: false,
            lastName: false,
            email:false,
            tel:false,
        }
    }


    handleChange = (e) => {

        const { name, value, type, checked } = e.target

        if (type === 'checkbox') {
            this.setState({
                skills: { ...this.state.skills, [name]:checked}
            })
        }
        else
        {
            if (type === 'file')
            {
                this.setState( { [name]: e.target.files[0] })
            }
            else
            {
                this.setState( { [name]: value })
            }
        }
    }


    handleBlur = (e) => {
        const { name, value } = e.target
        this.setState ( {touched: {...this.state.touched, [name]:true }})
    }


    validate = () =>
    {
        const errors = { 
            firstName: '',
            lastName: '',
            email: '',
            tel:'',
        }

        const verificarEmail = (e) =>
        {
            let tieneArroba=false
            let tienePunto=false
            let i=0

            while (i!=e.length && !tieneArroba)
            {
                if (e.charAt(i)=='@')
                    tieneArroba=true
                else
                    i=i+1
            }

            if (tieneArroba)
            {
                while (i!=e.length && !tienePunto)
                {
                    if (e.charAt(i)==='.')
                        tienePunto=true
                    else
                        i=i+1
                }
            }

            return (tieneArroba && tienePunto) 
        }


        const verificarTelefono = (t) =>
        {

            console.log(t)
            let correcto=true
            let i=0

            while (i!=t.length && correcto)
            {
                let car=t.charAt(i)
                switch (car)
                {
                    case '0': case '1': case '2': case '3':
                    case '4': case '5': case '6': case '7':
                    case '8': case '9':
                        {
                            i=i+1
                            break
                        }
                    default:
                        {
                            correcto=false
                        }
                }
            }
            return correcto
        }

        if (
        (this.state.touched.firstName && this.state.firstName.length < 3) || 
        (this.state.touched.firstName && this.state.firstName.length > 12)
        )
        {
            errors.firstName = 'First name must be between 2 and 12'
        }

        if (
            (this.state.touched.lastName && this.state.lastName.length <3) || 
            (this.state.touched.lastName && this.state.lastName.length>12)
        )
        {
            errors.lastName = 'Last name must be between 2 and 12'
        }
/*
        if ((this.state.touched.email) && !verificarEmail(this.state.email))
        {
            errors.email = 'Email must be valid'
        }
       
       */

      if ((this.state.touched.email) && !validator.isEmail(this.state.email))
      {
          errors.email = 'Email must be valid'
      }

        if ((this.state.touched.tel) && !verificarTelefono(this. state.tel))
        {
            errors.tel = 'Tel must be valid'
        }


        return errors
    }



    handleSubmit = (e) => {
        e.preventDefault()

        const {
            firstName,
            lastName,
            email,
            country,
            gender,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            bio,
            file,
            skills,
        } = this.state



    const formattedSkills = [] 

    for (const key in skills)
    {
        if (skills[key])
            formattedSkills.push(key.toLocaleUpperCase())
    }

    const data = {
        firstName,
        lastName,
        email,
        country,
        gender,
        tel,
        dateOfBirth,
        favoriteColor,
        weight,
        bio,
        file,
        skills: formattedSkills
    }

    }


    render()
    {
      //  const {firstName, lastName} = this.validate()
      const {firstName, lastName,email,tel} = this.validate()

        return (
            <div className="App">
                <h3>Add Student</h3>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name </label>
                            <input 
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="First Name"
                            /> <br/>
                            <small>{firstName}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name </label>
                            <input
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Last Name"
                            /> <br/>
                            <small>{lastName}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email </label>
                            <input 
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Email"
                            /> <br/>
                            <small>{email}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tel">Telephone </label>
                            <input
                                type="tel"
                                name="tel"
                                value={this.state.tel}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Telephone"
                            /> <br/>
                            <small>{tel}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country </label>
                            <select name="country" onChange={this.handleChange} 
                            id="country" onBlur={this.handleBlur}>
                                {selectOptions}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateOfBirth">Date of Birth </label>
                            <input 
                                type="date"
                                name="dateOfBirth"
                                value={this.state.dateOfBirth}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Date of Birth"
                            /> <br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="favoriteColor">Favorite Color </label>
                            <input
                                type="color"
                                name="favoriteColor"
                                id="favoriteColor"
                                value={this.state.favoriteColor}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Favorite Color"
                            /> <br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight </label>
                            <input
                                type="number"
                                name="weight"
                                id="weight"
                                value={this.state.weight}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Weight in Kg"
                            /> <br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender </label>
                            <div>
                                <input 
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    id="female"
                                    onChange={this.handleChange}
                                    checked={this.state.gender === "Female"}
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div>
                                <input 
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    id="male"
                                    onChange={this.handleChange}
                                    checked={this.state.gender === "Male"}
                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input 
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    id="other"
                                    onChange={this.handleChange}
                                    checked={this.state.gender === "Other"}
                                />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Select your skills</label>
                            <div>
                                <input
                                    type="checkbox"
                                    id="html"
                                    name="html"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="html">HTML</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="css"
                                    name="css"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="css">CSS</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="javascript"
                                    name="javascript"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="javascript">Javascript</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <br/>
                            <textarea
                                id="bio"
                                name="bio"
                                value={this.state.bio}
                                onChange={this.handleChange}
                                cols="120"
                                rows="10"
                                placeholder="Write about yourself"
                            />
                        </div>

                        <div>
                            <input type='file' name="file" onchange={this.handleChange}/>
                        </div>

                        <div>
                            <button>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }


}



ReactDOM.render(<Formulario/>, document.getElementById("root"))