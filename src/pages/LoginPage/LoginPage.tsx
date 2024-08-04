import type { FormProps } from 'antd';
import {Button, Form, Input, notification} from 'antd';
import {TUser} from "@/types/TUser";
import styles from "./LoginPage.module.css"
import {useUser} from "@/context/UserContext";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate()
    const { setUser } = useUser();

    const onFinish: FormProps<TUser>['onFinish'] = (values) => {
        setUser(values)
        navigate("/user")
    };

    const onFinishFailed: FormProps<TUser>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
        notification.error({
            message: "Auth failed",
            description: "Fill valida values",
            duration: 500
        })
    };

    return (
        <div className={styles.root_container}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={styles.login_form}
            >
                <Form.Item<TUser>
                    label="Username"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<TUser>
                    label="Password"
                    name="email"
                    rules={[{ required: true, type: "email", message: 'Please input valid email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage