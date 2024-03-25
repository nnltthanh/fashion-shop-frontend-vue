<template>
    <div class="max-md:gap-3 max-md:flex-col min-h-screen h-screen flex">
        <div class="max-md:h-[250px] lg:flex-auto bg-slate-300 flex items-center px-10">
            <img class="w-full h-full object-cover opacity-[35%]" src="@/assets/img_employee_login.jpg" alt="" />
        </div>
        <div class="max-md:w-full w-[65%] flex justify-start justify-center">
            <div class="max-md:w-full w-[80%] flex flex-col items-center justify-center h-full px-10">
                <div class="w-full flex flex-col items-center justify-center">
                    <p class="text-3xl font-bold">Đăng nhập cho Nhân Viên</p>
                    <p class="text-base font-medium mt-2">Đăng nhập vào tài khoản của bạn!</p>
                </div>
                <div class="w-full flex flex-col items-center justify-center mt-10">
                    <div class="w-full">
                        <AInput v-model="name" name="name" label="Tên đăng nhập"
                            style-custom="border-[#AFA2C3] py-3 p-2 border-[1px] border-[#3E334E] cursor-text"
                            is-required placeholder=" Tên đăng nhập..." />
                    </div>
                    <div class="w-full mt-3">
                        <AInput v-model="password" name="password" label="Mật khẩu"
                            style-custom="border-[#AFA2C3] py-3 p-2 border-[1px] border-[#3E334E] cursor-text"
                            is-required placeholder=" Nhập mật khẩu..." type="password" />
                    </div>
                    <div class="w-1/2 flex gap-3 mt-5">
                        <button class="bg-[#3E334E] text-white flex-[1] w-1/2 py-3 font-bold rounded-lg"
                            @click="onLogin">
                            <!-- <button class="bg-[#3E334E] text-white flex-[1] w-full py-3 font-bold rounded-lg" @click=""> -->
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
import axios from 'axios';
import AInput from '@/components/AInput.vue';
import { ref } from 'vue';
import bcrypt from 'bcryptjs';

const isLoginFailed = ref(false);
const isWrongPass = ref(false);
const router = useRouter();

const login = async (data) => {
    try {
        console.log('Login data:', {
            account: data.name,
        });
        // Sử dụng hashedPassword thay vì data.password khi gửi đi
        const response = await axios.post(`http://localhost:8080/users/loginEmployee`, {
            account: data.name,
        });
        // Kiểm tra xem API có trả về dữ liệu hay không
        if (response.data) {
            const hashedPasswordFromAPI = response.data.password;
            bcrypt.compare(data.password, hashedPasswordFromAPI, (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }
                if (result) {
                    console.log('Mật khẩu khớp.');
                    if (response.data.userType == 'staff') {
                        // Lưu thông tin tài khoản vào localStorage
                        localStorage.setItem('accountStaff', JSON.stringify(response.data));
                        router.push('/staff')
                    } else if (response.data.userType == 'manager') {
                        // Lưu thông tin tài khoản vào localStorage
                        localStorage.setItem('accountManager', JSON.stringify(response.data));
                        router.push('/manager')
                    } else if (response.data.userType == 'senior_manager') {
                        // Lưu thông tin tài khoản vào localStorage
                        localStorage.setItem('accountSeniorManager', JSON.stringify(response.data));
                        router.push('/senior-manager')
                    } else if (response.data.userType == 'admin') {
                        // Lưu thông tin tài khoản vào localStorage
                        localStorage.setItem('accountAdmin', JSON.stringify(response.data));
                        router.push('/admin')
                    }

                } else {
                    console.log('Mật khẩu không khớp.');
                    isWrongPass.value = true;
                    setTimeout(() => {
                        isWrongPass.value = false;
                    }, 5000);
                }
            });
        } else {
            console.error('Không có dữ liệu trả về từ API.');
        }
    } catch (error) {
        console.error(error);
        isLoginFailed.value = true; // Set the flag to true
        setTimeout(() => {
            isLoginFailed.value = false; // Clear the flag after 5 seconds
        }, 5000);
    }
};

// Validate password have min 8, have number vs uppercase
const { handleSubmit } = useForm({
    validationSchema: yup.object({
        name: yup.string().required("Tên đăng nhập là trường bắt buộc"),
        password: yup
            .string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, 'Mật khẩu phải chứa ít nhất 1 số và 1 chữ cái')
            .min(8, 'Mật khẩu ít nhất 8 ký tự')
            .max(20, 'Mật khẩu tối đa 20 ký tự')
            .required('Mật khẩu là trường bắt buộc'),
    }),
})

const onLogin = () => {
    console.log('diem1')
    handleSubmit(async (values) => {
        await login(values);
    })();
};
</script>