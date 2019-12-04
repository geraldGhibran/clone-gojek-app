import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import iconHome from './img/icon/home.png';
// import iconOrder from './img/icon/orders.png';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* Search Bar */}
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="Search Gojek services..."
                style={{
                  borderWidth: 1,
                  borderColor: '#EAEAEA',
                  borderRadius: 25,
                  height: 42,
                  fontSize: 12,
                  paddingLeft: 47,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginRight: 20,
                }}
              />
              <Image
                source={require('./img/icon/search.png')}
                style={{position: 'absolute', top: 10, left: 12}}
              />
            </View>
            <View style={{width: 90}}>
              <Image
                source={require('./img/icon/promo.png')}
                style={{height: 42, width: 89}}
              />
            </View>
          </View>
          {/* gopay */}
          <View style={{marginHorizontal: 17, marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2D60B9',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                padding: 14,
              }}>
              <Image source={require('./img/icon/gopay.png')} />
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                Rp 50.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: '#3063BC',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./img/icon/pay.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Pay
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./img/icon/promo2.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Promo
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./img/icon/topUp.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Top Up
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./img/icon/more.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>

          {/* Main Feature */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              flexWrap: 'wrap',
              marginHorizontal: 16,
              marginTop: 18,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 29,
              }}>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 41,
                    height: 41,
                  }}>
                  <Image source={require('./img/icon/GoRide.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',

                    color: '#525252',
                  }}>
                  GoRide
                </Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 41,
                    height: 41,
                  }}>
                  <Image source={require('./img/icon/GoCar.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',

                    color: '#525252',
                  }}>
                  GoCar
                </Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 41,
                    height: 41,
                  }}>
                  <Image source={require('./img/icon/GoFood.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',

                    color: '#525252',
                  }}>
                  GoFood
                </Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 41,
                    height: 41,
                  }}>
                  <Image source={require('./img/icon/GoBlueBird.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: '#525252',
                  }}>
                  GoBlueBird
                </Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 18,
              }}>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 41,
                    height: 41,
                  }}>
                  <Image source={require('./img/icon/GoSend.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',

                    color: '#525252',
                  }}>
                  GoSend
                </Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 41,
                    height: 41,
                  }}>
                  <Image source={require('./img/icon/GoPulsa.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',

                    color: '#525252',
                  }}>
                  GoPulsa
                </Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 41,
                    height: 41,
                  }}>
                  <Image source={require('./img/icon/GoPoints.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',

                    color: '#525252',
                  }}>
                  GoPoints
                </Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 41,
                    height: 41,
                  }}>
                  <Image source={require('./img/icon/More2.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',

                    color: '#525252',
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>

          {/* News Section */}
          <View style={{marginHorizontal: 16, marginTop: 34}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./img/icon/gopulsaBanner1.png')}
                style={{height: 170, width: '100%', borderRadius: 6}}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: 'black',
                  opacity: 0.2,
                  borderRadius: 6,
                }}></View>
              <View
                style={{
                  width: 79,
                  height: 20,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                }}>
                <Image
                  source={require('./img/icon/GoPulsaLogo.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 30,
                  position: 'absolute',
                  bottom: 12,
                  left: 16,
                }}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  Buy pulsa on the go
                </Text>
              </View>
              <View
                style={{
                  width: 60,
                  height: 30,
                  position: 'absolute',
                  bottom: 17,
                  right: 16,
                }}>
                {/* <Button title="BUY" style={{backgroundColor: '#32B057', borderRadius: 8, fontWeight: 100, fontSize: 14 }} /> */}
                <TouchableOpacity
                  style={{backgroundColor: '#32B057', borderRadius: 4}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'white',
                      fontSize: 14,
                      fontWeight: 'bold',
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                    }}>
                    BUY
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* gofood section */}
          <View style={{marginHorizontal: 16, marginTop: 34}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./img/icon/gofoodBanner1.jpeg')}
                style={{height: 170, width: '100%', borderRadius: 6}}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: 'black',
                  opacity: 0.2,
                  borderRadius: 6,
                }}></View>
              <View
                style={{
                  width: 79,
                  height: 20,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                }}>
                <Image
                  source={require('./img/icon/GoFoodLogo.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 30,
                  position: 'absolute',
                  bottom: 12,
                  left: 16,
                }}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  Fun = friends + food!
                </Text>
              </View>
              <View
                style={{
                  width: 75,
                  height: 30,
                  position: 'absolute',
                  bottom: 17,
                  right: 16,
                }}>
                {/* <Button title="BUY" style={{backgroundColor: '#32B057', borderRadius: 8, fontWeight: 100, fontSize: 14 }} /> */}
                <TouchableOpacity
                  style={{backgroundColor: '#32B057', borderRadius: 4}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'white',
                      fontSize: 14,
                      fontWeight: 'bold',
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                    }}>
                    ORDER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* gopoints section */}
          <View style={{marginHorizontal: 16, marginTop: 34, marginBottom: 20}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./img/icon/gopointsBanner1.jpeg')}
                style={{height: 170, width: '100%', borderRadius: 6}}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: 'black',
                  opacity: 0.3,
                  borderRadius: 6,
                }}></View>
              <View
                style={{
                  width: 79,
                  height: 20,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                }}>
                <Image
                  source={require('./img/icon/GoPointsLogo.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 30,
                  position: 'absolute',
                  bottom: 12,
                  left: 16,
                }}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  Browse exciting vouchers
                </Text>
              </View>
              <View
                style={{
                  width: 85,
                  height: 5,
                  position: 'absolute',
                  bottom: 40,
                  right: 16,
                }}>
                {/* <Button title="BUY" style={{backgroundColor: '#32B057', borderRadius: 8, fontWeight: 100, fontSize: 14 }} /> */}
                <TouchableOpacity
                  style={{backgroundColor: '#32B057', borderRadius: 4}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'white',
                      fontSize: 13,
                      fontWeight: 'bold',
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                    }}>
                    BROWSE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#E8E9ED',
              borderBottomWidth: 1,
              marginTop: 20,
              marginHorizontal: 20,
              width: '90%',
            }}></View>

          {/* Internal Information Section */}
          <View style={{padding: 17, marginBottom: 20}}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#1C1C1C',
                marginVertical: 18,
              }}>
              Complete your profile
            </Text>
            <View style={{flexDirection: 'row', marginBottom: 16}}>
              <View>
                <Image source={require('./img/icon/complete-profile.png')} />
              </View>
              <View style={{marginLeft: 16, flex: 1}}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>
                  Verify your email
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'normal',
                    color: '#4A4A4A',
                    width: '70%',
                  }}>
                  Verify your email to receive trip receipts
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 85,
                height: 5,
                position: 'absolute',
                bottom: 30,
                right: 33,
              }}>
              {/* <Button title="BUY" style={{backgroundColor: '#32B057', borderRadius: 8, fontWeight: 100, fontSize: 14 }} /> */}
              <TouchableOpacity
                style={{backgroundColor: '#32B057', borderRadius: 4}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                  }}>
                  VERIFY
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#E8E9ED',
              borderBottomWidth: 1,
              marginVertical: 20,
              marginHorizontal: 20,
              width: '90%',
            }}></View>
          {/* Nearby gofood */}
          {/* Photo by Cayla1 on Unsplash */}
          {/* Photo by Davide Cantelli on Unsplash */}
          {/* Photo by Taylor Kiser on Unsplash */}
          {/* Photo by Filipe de Rodrigues on Unsplash */}
          {/* Photo by Dan Gold on Unsplash */}
          <View>
            <View
              style={{height: 15, width: 60, marginLeft: 14, marginBottom: 14}}>
              <Image source={require('./img/icon/GoFoodLogo2.png')} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 16,
                paddingHorizontal: 16,
              }}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
                Nearby Restaurants
              </Text>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#32B057'}}>
                See All
              </Text>
            </View>
            <ScrollView
              horizontal
              style={{flexDirection: 'row', paddingLeft: 16}}>
              <View style={{marginRight: 20}}>
                <View style={{width: 150, height: 150}}>
                  <Image
                    source={require('./img/dummy/go-food-salad.jpg')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    marginTop: 12,
                  }}>
                  Salad
                </Text>
              </View>
              <View style={{marginRight: 20}}>
                <View style={{width: 150, height: 150}}>
                  <Image
                    source={require('./img/dummy/go-food-cayla.jpg')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    marginTop: 12,
                    width: '70%',
                  }}>
                  Sup Cayla Margonda
                </Text>
              </View>
              <View style={{marginRight: 20}}>
                <View style={{width: 150, height: 150}}>
                  <Image
                    source={require('./img/dummy/go-food-junkfood.jpg')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    marginTop: 12,
                  }}>
                  Makanan Sederhana
                </Text>
              </View>
              <View style={{marginRight: 20}}>
                <View style={{width: 150, height: 150}}>
                  <Image
                    source={require('./img/dummy/go-food-kfc.jpg')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    marginTop: 12,
                  }}>
                  KFC Margonda Depok
                </Text>
              </View>
              <View style={{marginRight: 20}}>
                <View style={{width: 150, height: 150}}>
                  <Image
                    source={require('./img/dummy/go-food-burger-king.jpg')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    marginTop: 12,
                  }}>
                  Burger King
                </Text>
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              borderBottomColor: '#E8E9ED',
              borderBottomWidth: 1,
              marginVertical: 20,
              marginHorizontal: 20,
              marginBottom: 20,
              width: '90%',
            }}></View>
        </ScrollView>

        {/* Menu Bottom */}
        <View
          style={{height: 56, flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./img/icon/home-active.png')}
            />
            <Text style={{fontSize: 11, color: '#2EB056', marginTop: 4}}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./img/icon/orders.png')}
            />
            <Text style={{fontSize: 11, color: '#434343', marginTop: 4}}>
              Orders
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./img/icon/chat.png')}
            />
            <Text style={{fontSize: 11, color: '#434343', marginTop: 4}}>
              Chat
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./img/icon/inbox.png')}
            />
            <Text style={{fontSize: 11, color: '#434343', marginTop: 4}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 28}}
              source={require('./img/icon/account.png')}
            />
            <Text style={{fontSize: 11, color: '#434343', marginTop: 4}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
