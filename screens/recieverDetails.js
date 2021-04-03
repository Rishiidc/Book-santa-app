import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default class RecieverDetails extends Component{
    constructor(props){ super(props);
         this.state={ userId : firebase.auth().currentUser.email,
             userName : "",
              recieverId : this.props.navigation.getParam('details')["user_id"],
               requestId : this.props.navigation.getParam('details')["request_id"],
                bookName : this.props.navigation.getParam('details')["book_name"],
                 reason_for_requesting : this.props.navigation.getParam('details')["reason_to_request"],
                  recieverName : '',
                   recieverContact : '',
                    recieverAddress : '',
                     recieverRequestDocId : ''
                     } }
                     getRecieverDetails(){
                         db.collection('Users').where('emailID','==',this.state.recieverId).get()
                         .then(snapshot => {
                             snapshot.forEach(doc => {
                                 this.setState({
                                     recieverName: doc.data().first_name,
                                     recieverContact: doc.data().contact,
                                     recieverAddress: doc.data().address
                                 })
                             })
                         })
                         db.collection('requested_books').where('request_id','==',this.state.requestId).get() 
                         .then(snapshot=>{ snapshot.forEach(doc => { this.setState({recieverRequestDocId:doc.id})
                         }) 
                        })
                     }
                     getUserDetails(userId){
                        db.collection('Users').where('emailID','==',userId).get()
                        .then(snapshot => {
                            snapshot.forEach(doc => {
                                this.setState({
                                    userName: doc.data().first_name + doc.data().last_name
                                })
                            })
                        })
                    }
}