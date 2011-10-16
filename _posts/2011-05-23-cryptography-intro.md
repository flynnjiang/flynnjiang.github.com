---
layout: post
category: notes
title: 密码体制介绍
---

经典密码体制
============

密码体制可以用数学表示为一个五元组(P,C,K,E,D)：

* P表示所有可能明文(Plaintext)组成的优先集，即明文空间。
* C表示所有可能密文(Ciphertext)组成的有限集，即密文空间。
* K标识所有可能密钥(Secret Key)组成的有限集，即密钥空间。
* E为加密(Encrypt)法则，是P×K->C上的映射。
* D为解密(Decrypt)法则，是C×K->P上的映射。

那么

* 加密过程可以表示为：C = E(P,K)
* 解密过程可以表示为：P = D(C,K)

并且有P = D(E(P,k1), k2)，其中：k1为加密密钥，k2为解密密钥。
如果有k1 = k2,则称为对称密码体制，
如果k1 ≠ k2，则称为非对称密码体制，也称双钥密码体制。

对称密码
--------

对称密码体制中的加密密钥与解密密钥相同，或者说实质上等同（可相互推导）。

从加密模式上分，对称密码体制又可分为流密码(stream cipher)与分组密码
(block cipher)两类。

流密码模型：
<a href="http://www.flickr.com/photos/63138377@N02/5750872064/" title="Flickr 上 flynnjiang 的 stream cipher"><img src="http://farm4.static.flickr.com/3642/5750872064_f00bb23f18.jpg" width="473" height="195" alt="stream cipher"></a>

分组密码模型：
（略）


常见的对称密码算法有DES、AES、RC4等，其中前两个是属于分组密码，最后的RC4属于
流密码。

双钥密码
--------
在双钥密码体制中，加密密钥与解密密钥是不相同的。其中，加密密钥又被称为公开密钥，
解密密钥被称为私密密钥。显然公开密钥是需要对外公开的，而私密密钥则要求严格保密。
常见的双钥密码有RSA、ECC等。

双钥密码体制既可以用来加/解密也可以用来认证。

* 加密/解密：P = D(E(P, pub-key), priv-key)
* 认证：P = E(D(P, priv-key), pub-key)

对于以上两种，可以分别假设如下情景（前提是Bob拥有自己的密钥对，并将其中的公钥
公开）：

加密：Alice想给Bob发送一个秘密信息，当然是只想让Bob看到，不想让其他人知道了，
那么就可以这么做。

1. Alice用Bob的公钥将信息加密，然后发送给Bob。
2. Bob收到加密过的信息后，用自己的私钥解密，即可得知信息内容了。

认证：Alice在网上跟“Bob”聊天，但是他怎么可以确定对方就是Bob，而不是别人假冒的
呢？

1. Alice让Bob加密一个指定的信息，然后发给自己。
2. Bob于是很听话的用自己的私钥加密了指定信息，发给了Alice。
3. Alice收到后，用Bob的公钥解密。如果发现解密后的内容与原内容一致，则可证明
发信认的确是Bob（因为理论上该私钥只有Bob一个人知道）。

量子密码
========

量子密码学是一门新兴的学科，它以密码学和量子力学特性为基础。其安全性由
海森堡测不准原理及单量子不可复制定理保证。

海森堡测不准原理
----------------
（暂略）

单量子不可复制定理
------------------
该定理是海森堡测不准原理的推论，它指在不知到量子状态的情况下复制单个量子是不可能
的，因为要复制单个量子就只能先作测量，而测量必然改变量子的状态。