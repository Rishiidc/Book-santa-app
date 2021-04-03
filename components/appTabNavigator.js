import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonate from '../screens/bookDonate'
import BookRequest from '../screens/bookRequest'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonate
    },
    BookRequest:{
        screen:BookRequest
    }
})
