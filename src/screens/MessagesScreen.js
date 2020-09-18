import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: 'No title',
        description: 'No description',
        image: require('../../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'I said do not have title',
        description: 'i repeat, no description',
        image: require('../../assets/mosh.jpg')
    }
]



const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
       setMessages(messages.filter( m => m.id !== message.id));
    }

    return (
    <Screen>
       <FlatList
         data={messages}
         keyExtractor={message => message.id.toString()}
         renderItem={({item}) => {
             return (
                <ListItem 
                title={item.title}
                subtitle={item.description}
                image={item.image}
                onPress={() => console.log('tapped ', item)}
                renderRightActions={() => 
                <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                />
             )
         }}
         ItemSeparatorComponent={ListItemSeparator}
         refreshing={refreshing}
         onRefresh={() => {
             setMessages([
                {
                    id: 2,
                    title: 'I said do not have title',
                    description: 'i repeat, no description',
                    image: require('../../assets/mosh.jpg')
                }
             ])
         }}
       />
    </Screen>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({
  
})
