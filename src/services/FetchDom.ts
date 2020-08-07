/* global document */

import puppeteer from 'puppeteer';
import { Request, Response } from 'express';

/**
 * @swagger
 *
 *
 * /pages:
 *    get:
 *      tags:
 *        - Pages
 *      name: FetchDom
 *      summary: get page for render static page.
 *      parameters:
 *        - in: query
 *          name: site
 *          schema:
 *            type: string
 *      produces:
 *        - text/html
 *      consumes:
 *        - text/html
 *      responses:
 *        200:
 *          description: success
 *          content:
 *            text/html:
 *              schema:
 *                type: string
 *                examples:
 *                  html:
 *                    summary: ABQM Site
 *                    value: '<html></html>'
 */

export default async function fetchDom(request: Request, response: Response) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  const localUrl = `${request.query.site}`;

  console.log(localUrl);

  await page.goto(localUrl, {
    waitUntil: 'networkidle0',
  });

  const html = await page.evaluate(() => {
    return document.documentElement.innerHTML;
  });

  response.send(html);

  browser.close();
}
