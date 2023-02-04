import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

//* READ 모든 고양이 데이터 조회
export const readAllCat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: cats,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* READ 특정 고양이 데이터 조회
export const readCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const findCat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: findCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* CREATE 새로운 고양이 데이터 추가
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* UPDATE 특정 고양이 데이터 업데이트
export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;

    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = body;
      }
    });

    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* UPDATE 특정 고양이 일부 데이터 업데이트
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;

    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = body;
      }
    });

    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* DELETE 특정 고양이 삭제
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
