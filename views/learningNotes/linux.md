# Linux 常用命令

## 一、文件和目录操作
- 列出目录内容：`ls`
- 切换目录：`cd`
- 显示当前目录：`pwd`
- 创建一个新目录：`mkdir docs`
- 创建一个空文件或更新文件的时间戳：`touch example.txt`
- 查找文件：`find . -name report.txt`
- 复制文件或目录：`cp file1.txt backup/`
- 移动文件或目录：`mv file2.txt documents/`
- 删除文件或目录：`rm oldfile.txt`
- 查看文件内容：`cat example.txt`
- 压缩目录为 tar.gz 文件：`tar -czvf file.tar.gz /path/to/directory`
- 解压 tar.gz 文件：`tar -xzvf file.tar.gz`
- 压缩文件为 .gz 格式：`gzip filename`
- 解压 .gz 文件：`gzip -d filename.gz`
- 压缩目录为 zip 文件：`zip -r archive.zip /path/to/directory`
- 解压 zip 文件：`unzip archive.zip`
## 二、系统操作
- 查看系统资源占用情况：`top`
- 显示当前进程状态：`ps`
- 终止进程：`kill`
- 重启系统：`reboot`
- 关闭系统：`shutdown`
## 三、用户管理
- 添加新用户：`useradd username`
- 设置用户密码：`passwd username`
- 切换用户：`su username`
- 以管理员权限执行命令：`sudo`
- 删除用户：`userdel`
## 四、网络操作
- 检测与目标主机的连通性：`ping target_host`
- 显示或配置网络设备：`ifconfig`
- 远程登录到另一台主机：`ssh username@hostname`
- 下载文件：`wget https://example.com/file.zip`
## Vim 编辑器的命令
- 打开Vim编辑器：打开名为example.txt的文件进行编辑 `vim example.txt`
- 保存并退出：按下`Esc`键进入命令模式，然后输入`:wq`（保存并退出）
- 退出不保存：按下`Esc`键进入命令模式，然后输入`:q!`（退出不保存）
- 编辑（插入）模式：按下`i`键即可开始输入文本
- 查找文本：按下`Esc`键进入命令模式，然后输入`/search_term`来查找文本
## More

- [Linux 操作系统 官网](https://www.linux.org/)
- [Linux 核心(内核) 官网](https://www.kernel.org/)
