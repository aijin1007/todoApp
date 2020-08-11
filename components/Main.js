import React, { Component } from 'react';
import {Button,StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Note from './Note';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            noteArray:[
                {
                  "id": 1,
                  "title": "Methyl Salicylate Menthol Eucalyptus",
                  "date": "07/11/2020",
                  "completed": false
                },
                {
                  "id": 2,
                  "title": "Agnus castus, Ambra grisea, Conium maculatum, Apiolum, Estradiol, Estriol, Folliculinum, Ldopa, Melatonin, Testosterone, Alpha-lipoicum acidum,",
                  "date": "09/11/2020",
                  "completed": false
                },
                {
                  "id": 3,
                  "title": "Homosalate, Octisalate, Avobenzone, Octocrylene, Oxybenzone",
                  "date": "09/21/2020",
                  "completed": false
                },
                {
                  "id": 4,
                  "title": "Valsartan and Hydrochlorothiazide",
                  "date": "12/22/2020",
                  "completed": false
                },
                {
                  "id": 5,
                  "title": "Ethyl Alcohol",
                  "date": "11/11/2020",
                  "completed": false
                },
                {
                  "id": 6,
                  "title": "Acetaminophen, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride",
                  "date": "12/26/2020",
                  "completed": true
                },
                {
                  "id": 7,
                  "title": "Poverty Weed",
                  "date": "12/06/2020",
                  "completed": false
                },
                {
                  "id": 8,
                  "title": "Aluminum Chlorohydrate",
                  "date": "12/29/2020",
                  "completed": true
                },
                {
                  "id": 9,
                  "title": "Metronidazole",
                  "date": "11/24/2020",
                  "completed": true
                },
                {
                  "id": 10,
                  "title": "Levocetirizine Dihydrochloride",
                  "date": "11/06/2020",
                  "completed": true
                },
                {
                  "id": 11,
                  "title": "CLOTRIMAZOLE",
                  "date": "08/06/2020",
                  "completed": false
                },
                {
                  "id": 12,
                  "title": "methylergonovine maleate",
                  "date": "10/11/2020",
                  "completed": false
                },
                {
                  "id": 13,
                  "title": "Naproxen Sodium",
                  "date": "11/28/2020",
                  "completed": false
                },
                {
                  "id": 14,
                  "title": "Duloxetine",
                  "date": "09/21/2020",
                  "completed": false
                },
                {
                  "id": 15,
                  "title": "BENZETHONIUM CHLORIDE",
                  "date": "07/30/2020",
                  "completed": true
                },
                {
                  "id": 16,
                  "title": "TRICLOSAN",
                  "date": "08/24/2020",
                  "completed": false
                },
                {
                  "id": 17,
                  "title": "Hydrogen Peroxide",
                  "date": "11/26/2020",
                  "completed": false
                },
                {
                  "id": 18,
                  "title": "vardenafil hydrochloride",
                  "date": "10/19/2020",
                  "completed": false
                },
                {
                  "id": 19,
                  "title": "Avobenzone, Homosalate, Octisalate, Octocrylene, and Oxybenzone",
                  "date": "11/16/2020",
                  "completed": true
                },
                {
                  "id": 20,
                  "title": "romiplostim",
                  "date": "11/27/2020",
                  "completed": true
                },
                {
                  "id": 21,
                  "title": "lidocaine",
                  "date": "07/12/2020",
                  "completed": true
                },
                {
                  "id": 22,
                  "title": "Leonurus cardiaca, Agaricus muscarius, Arsenicum album, Cocculus indicus, Conium maculatum, Petroleum, Phosphorus, Pulsatilla, Tabacum, Theridion,",
                  "date": "10/20/2020",
                  "completed": false
                },
                {
                  "id": 23,
                  "title": "Aspirin",
                  "date": "10/10/2020",
                  "completed": false
                },
                {
                  "id": 24,
                  "title": "Acetaminophen, Diphenhydramine HCL, and Phenylephrine HCL.",
                  "date": "12/18/2020",
                  "completed": false
                },
                {
                  "id": 25,
                  "title": "Ethyl Alcohol",
                  "date": "11/26/2020",
                  "completed": true
                },
                {
                  "id": 26,
                  "title": "Valsartan and hydrochlorothiazide",
                  "date": "12/02/2020",
                  "completed": false
                },
                {
                  "id": 27,
                  "title": "Oxcarbazepine",
                  "date": "12/16/2020",
                  "completed": true
                },
                {
                  "id": 28,
                  "title": "Ibuprofen",
                  "date": "09/18/2020",
                  "completed": false
                },
                {
                  "id": 29,
                  "title": "Oxycodone hydrochloride and Acetaminophen",
                  "date": "10/23/2020",
                  "completed": true
                },
                {
                  "id": 30,
                  "title": "Miconazole nitrate",
                  "date": "07/19/2020",
                  "completed": false
                }
              ],
            title: "",
            
        }
    }
    
  
    
  render(){
      let todos = this.state.noteArray.map((val, key)=>{
          return <Note key={key} keyval={key} val={val}
          deleteMethod={()=> this.deleteTodo(key)}/>
      });
      
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>~TODO~</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
      
            {todos}
      
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
          style={styles.textInput}
          onChangeText={(title)=>this.setState({title})}
          value={this.state.title}
          placeholder="Type todo here"
          placeholderTextColor="white"
          underlineColorAndroid="transparent">

          </TextInput>
        </View>
        <TouchableOpacity onPress={this.addTodo.bind(this)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
  addTodo(){
      if(this.state.title){
          var d = new Date();
          this.state.noteArray.push({
          'date': d.getFullYear()+
              "/" + (d.getMonth()+1)+
              "/" + d.getDate(),
              'title': this.state.title
          });
          this.setState({noteArray: this.state.noteArray})
          this.setState({title: ""});
      }
  }
  deleteTodo(key){
      this.state.noteArray.splice(key, 1);
      this.setState({noteArray: this.state.noteArray})
  }
}

const styles =StyleSheet.create({
  container: {
flex: 1,

  },
  header: {
    backgroundColor: "#48BAE8",
    alignItems: "center",
    justifyContent:"center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",

  },
  headerText:{
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 100,
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput:{
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopColor: "#ededed",
    borderTopWidth: 2,
  },
  addButton:{
    position:'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#48BAE8',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,

  },
  addButtonText:{
    color: "#fff",
    fontSize: 24,
  },

})