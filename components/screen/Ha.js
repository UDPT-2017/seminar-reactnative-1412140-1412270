import React,{Component} from "react";
import {
  View,Text,StyleSheet,Button,TextInput,Alert,Image,ListView
} from "react-native";
import firebase from "../api/api";
import styles from "../styles/styles";


const onButtonPress = () => {
  Alert.alert('Button has been pressed!');

};


export default class Ha extends Component
{
  constructor(props) {
    super(props);
    items=[];
     database=firebase.database();
        user=database.ref('User');

    this.state = { text: 'Nhap username' ,txtmatkhau:'Nhap password',
    dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
  };


  }
submit()
  {
    user.push(
      {
        Username: this.state.text,
        Password: this.state.txtmatkhau,
      },()=>alert("ok xong")
    )
  }

  componentWillMount()
  {
    database.ref('User').on('value',(snap)=>{
      items=[];
      snap.forEach((data)=>{
        items.push(
          {
            key:data.key,
            data:data.val(),
          }
        );
      })

      this.setState({dataSource:this.state.dataSource.cloneWithRows(items)});
    }
  );
  }

  renderRow(data)
  {
    return(
      <View>
      <Text> Key:{data.key} </Text>
      <Text> Username:{data.data.Username} </Text>
      <Text> Password:{data.data.Password} </Text>
      <View style={{height:2, backgroundColor:'orange'}}/>
      </View>
    );
  }
  render(){
    return(

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
 <View style={styles.tieude}>
     <ListView
     dataSource={this.state.dataSource}
     renderRow={this.renderRow.bind(this)}

     />
     <Image
       style={{width: 600, height: 200}}
         source={require('seminar/components/images/la_xanh.png')}
       >

       <Text style={{fontSize:40}} > WELCOM TO MY PAGE </Text>
</Image>
</View>
< View style={styles.khung}>
     <TextInput
   style={{height: 40, borderColor: 'yellow', borderWidth: 1}}
   onChangeText={(text) => this.setState({text})}

   value={this.state.text} />

   <TextInput
 style={{height: 40, borderColor: 'yellow', borderWidth: 1}}
 onChangeText={(txtmatkhau) => this.setState({txtmatkhau})}

 value={this.state.txtmatkhau} />

 <Text onPress={this.submit.bind(this)} > đăng kí tài khoản mơi </Text>

     <Button
      onPress={this.props.onbuttonPress}
      title="Press Purple"
      color="#841584"
      accessibilityLabel="Learn more about purple">

    </Button>
</View>

      </View>

    );
  }
}
