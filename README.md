Trong **Micro Frontend (đặc biệt khi dùng Module Federation)** thường có 2 vai trò chính:

```
Host (Shell / Container)
Remote (Micro Apps)
```

Bạn có thể hiểu đơn giản:

```
Host = app chính
Remote = app con
```

---

# 1. Tổng quan Host và Remote

```
                Browser
                   │
                Host App
                   │
       ┌───────────┼───────────┐
       │           │           │
   Product App   Cart App   User App
     (Remote)     (Remote)   (Remote)
```

* **Host**: load các remote
* **Remote**: expose component cho host dùng

---