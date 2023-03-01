import React, { useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    FlatList,
    Text,
    View,
} from 'react-native';

export default function ToDoList() {

    type Item = {
        key: string;
        title: string;
    }

    const [items, setItems] = useState<Item[]>([]);
    const [inputText, setInputText] = useState('');

    const addItem = (text: string) => {
        setItems([...items, { key: Math.random().toString(), title: text }]);
    };

    const deleteItem = (key: string) => {
        setItems((prevItems: Item[]) => {
            return prevItems.filter(item => item.key != key);
        });
    };

    console.log({ items })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="Add Item"
                    onChangeText={text => setInputText(text)}
                />
                <TouchableOpacity onPress={() => addItem(inputText)}>
                    <Text style={styles.addButton}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.item}>

                        <Text style={styles.itemText}>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteItem(item.key)}>
                            <Text style={styles.deleteButton}>X</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    input: {
        height: 50,
        flex: 1,
        marginRight: 10,
        paddingHorizontal: 8,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    },
    addButton: {
        fontSize: 24,
        color: '#2c3e50',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

    },
    itemText: {
        flex: 1,
        fontSize: 18,
    },
    deleteButton: {
        fontSize: 18,
        color: 'red',
    },
});
