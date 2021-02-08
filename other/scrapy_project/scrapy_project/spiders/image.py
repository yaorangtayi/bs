import scrapy
from scrapy.http.response.html import HtmlResponse
from ..items import ScrapyProjectItem
import time
import random

class ImageSpider(scrapy.Spider):
    name = 'image'
    allowed_domains = ['safebooru.org']
    start_urls = ['https://safebooru.org/index.php?page=post&s=list&pid={}'.format(x*40) for x in range(110,310)]

    def parse(self, response):
        subjects = response.xpath('//span[@class="thumb"]')
        for subject in subjects:
            url = 'https://safebooru.org/'+subject.xpath('.//a/@href').extract()[0]
            yield scrapy.Request(url, callback=self.parse1)

    def parse1(self, response):
        li=response.xpath('//img[@id="image"]/@src').extract()
        if li!=[]:
            urls=[li[0]]
            paths=[]
            item=ScrapyProjectItem(image_urls=urls,image_paths=paths)
            yield item 
