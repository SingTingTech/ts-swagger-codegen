# 项目结构

``` generic
/ ---- 
  |-- generator.java 自定义生成格式
  |-- src 后端及前端源码
    |-- main/ts/demo 前端源码
       |-- lib generator相关jar包 generator.java修改之后编译完替换这里的jar包
       |-- swagger-codegen-cli.jar 需要自己下载
       |-- src/api yarn ts后生成的ts都在这
```

# Download swagger-codegen
### windows 
```powershell
Invoke-WebRequest -OutFile lib/swagger-codegen-cli.jar "https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.51/swagger-codegen-cli-3.0.51.jar"
```
### linux/macos

```shell
wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.51/swagger-codegen-cli-3.0.51.jar -O lib/swagger-codegen-cli.jar
```