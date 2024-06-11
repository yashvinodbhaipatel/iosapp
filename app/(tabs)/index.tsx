import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const injectedJavaScript = `
    const meta = document.createElement('meta'); 
    meta.setAttribute('name', 'viewport'); 
    meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'); 
    document.getElementsByTagName('head')[0].appendChild(meta);
  `;

  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://fireaway-gujarat.com/' }} 
        style={{ marginTop: 40 }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
