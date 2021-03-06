import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
    {   
        title: 'My listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {   
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    },

]

const AccountScreen = () => {
    return (
       <Screen style={styles.screen}>
           <View style={styles.container}>
            <ListItem title='Mosh Hamedani' subtitle='programmingwithmosh@gmail.com'
            image={require('../../assets/mosh.jpg')}/>    
           </View>

           <View style={styles.container}> 
                <FlatList
                 data={menuItems}
                 keyExtractor={ menuItem => menuItem.title}
                 ItemSeparatorComponent={ListItemSeparator}
                 renderItem={({item}) => {
                     return (
                         <ListItem title={item.title} 
                         IconComponent={
                         <Icon
                            name={item.icon.name}
                            backgroundColor={item.icon.backgroundColor}
                         />}/>
                     )
                 }}
                />
           </View>

           <View>
               <ListItem
               title='Log out'
               IconComponent={<Icon
                name='logout'
                backgroundColor='#ffe66d'
               />}
               />
           </View>

       </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.lightgray
    }
})
