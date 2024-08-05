<template>
    <v-container>
        <v-row justify="center">
            <!-- 화면크기가 small 이상일 때: sm (스마트폰, 태블릿 크기)-->
            <!-- 화면크기가 medium 이상일 때: md (데스크탑 크기)-->
            <v-col cols="12" sm="4" md="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        회원가입
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="memberCreate">
                            <v-text-field
                                label="이름"
                                v-model="name"
                                prepend-icon="mdi-account"
                                required
                            >

                            </v-text-field>
                            <v-text-field
                                label="email"
                                v-model="email"
                                type="email"
                                prepend-icon="mdi-email"
                                required
                            >
                                
                            </v-text-field>
                            <v-text-field
                                label="password"
                                v-model="password"
                                type="password"
                                prepend-icon="mdi-lock"
                                required
                            >
                                
                            </v-text-field>
                            <v-text-field
                                label="도시"
                                v-model="city"
                                prepend-icon="mdi-city"
                            >
                                
                            </v-text-field>
                            <v-text-field
                                label="상세주소"
                                v-model="street"
                                prepend-icon="mdi-home"
                            >
                                
                            </v-text-field>
                            <v-text-field
                                label="우편번호"
                                v-model="zipcode"
                                prepend-icon="mdi-mailbox"
                            >
                            </v-text-field>
                            <!-- block은 부모컨테이너 너비만큼을 꽉 채우는 것 -->
                            <v-btn type="submit" color="primary" block>등록</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            name: "",
            email: "",
            password: "",
            city: "",
            street: "",
            zipcode: ""
        }
    },
    methods:{
        memberCreate(){

        }
    }
}
</script>
