import React, { Component } from 'react'

class Practice extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'selva',
          id: '1'
        },
        {
          name: 'raj'
          , id: '2'
        },
        {
          name: 'jithu',
          id: '3'
        },
        {
          name: 'Muttas',
          id: '4'
        },
      ],
      searchField : '',


    }
  }

  onsearchChange = (event) =>{
    const searchField = event.target.value.toLocaleLowercase();
    this.setState({searchField}
    )
  }
  render() {
    const {monsters, searchField} = this.state;
    const {onsearchChange} = this;
    const filterdMonsters = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    } )
    return (
      <>
        {
          this.state.monsters.map((monster) => {
            return <div key={ monster.id}>
              <h1>{monster.name}</h1>
            </div>
          })
        }
            <input type="search" name="" id=""  onChange={onsearchChange}

            {...filterdMonsters.map((monster) => {
              return (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
              )
            } )}
            
            />

            
      </>
    )
  }
}

export default Practice