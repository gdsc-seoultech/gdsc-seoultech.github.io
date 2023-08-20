---
layout: post
title: 알고리즘 스터디 우선순위 큐-1927번
date: 2021-11-15 12:00:00 +0900
author: yoon-H
description: 우선순위 큐 알고리즘 1927번 풀이
categories: ["1st_term"]
tags: ["study"]
---


# 우선순위 큐 1927번 - 최소 힙

안녕하세요. GDSC 안드로이드 멤버 한윤재입니다.<br>
우선순위 큐 1927번 문제 풀이합니다! <br>

[https://www.acmicpc.net/problem/1927](https://www.acmicpc.net/problem/1927)

# 풀이

힙은 완전이진트리로 구성된 자료구조로, **최댓값과 최솟값을 찾는 연산**을 빠르게 하기 위해 고안되었습니다.<br>
<br>
파이썬에는 내장 모듈로 heapq 모듈이 있어 heap을 쉽게 사용할 수 있습니다. 이때 최소 힙 형태로 정렬됩니다.

```python
import sys
import heapq

n = int(sys.stdin.readline())

command = [0]*n

for i in range(n) :
    command[i] = int(sys.stdin.readline())

heap = []
heapq.heapify(heap)


for i in command :
    if i == 0 :
        if len(heap) == 0 :
            print(0)
        else :
            print(heapq.heappop(heap))
    else :
        heapq.heappush(heap, i)
```

## 마무리

확실히 파이썬에는 내장 모듈이 많아 자료구조를 구현하기 편리합니다.

[참고 자료](https://littlefoxdiary.tistory.com/3)

